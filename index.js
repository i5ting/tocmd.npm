'use strict'

require('shelljs/global')

var assign = require('object-assign')
var fs = require('fs')
var BufferHelper = require('bufferhelper')
var Handlebars = require('handlebars')
var shell = require('shelljs');
var base64Img = require('base64-img');
var path=require("path");

//字符串转hash
String.prototype.hashCode = function() {
var hash = 0, i, chr;
if (this.length === 0) return hash;
for (i = 0; i < this.length; i++) {
  chr   = this.charCodeAt(i);
  hash  = ((hash << 5) - hash) + chr;
  hash |= 0; // Convert to 32bit integer
}
return hash;
};

function checkURL(URL){
  var str=URL;
  //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
  //下面的代码中应用了转义字符""输出一个字符"/"
  var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
  var objExp=new RegExp(Expression);
  if(objExp.test(str)==true){
    return true;
  }else{
    return false;
  }
};

function generator(pwd, source_file_name, dest_file_path, options, defaultJarPath) {
	var file_name = source_file_name.split('/').pop()
	var _file_name = file_name.split('.')[0]

	var is_debug = options.debug
	function log(str) {
		if (is_debug == true)
			console.log(str)
	}

	// 点号表示当前文件所在路径  
	var str = fs.realpathSync('.')
	log(str)

	//函数可以返回当前正在执行的项目路径
	var pwd = pwd
	//:属性返回的是  nodejs 的安装路径 
	// processor.execPath 

	var preview_path = pwd

	var source_file_path = source_file_name

	var dest_file_path = dest_file_path

	if (test('-d', preview_path)) {
		/* do something with dir */
		mkdir('-p', preview_path)
	}

	var template_path=path.resolve(__dirname,"./source/template.html");
	log('template_path = ' + template_path)

	fs.readFile(source_file_path, function (err, data) {
		if (err) throw err
		log(data)

		// var rs = fs.createReadStream(template_path, {encoding: 'utf-8', bufferSize: 11})
		var rs = fs.createReadStream(template_path, { bufferSize: 11 })
		var bufferHelper = new BufferHelper()

		rs.on("data", function (trunk) {
			bufferHelper.concat(trunk)
		})

		rs.on("end", function () {
			var source = bufferHelper.toBuffer().toString('utf8')
			var template = Handlebars.compile(source)

			log(template)

			var marked = require('marked')
      //自定义renderer
      const renderer = {
        code(code, infostring, escaped) {
        const lang = (infostring || '').match(/\S*/)[0].toLowerCase();
        if (this.options.highlight) {
          const out = this.options.highlight(code, lang);
          if (out != null) {
            escaped = true;
            if ((lang!="plantuml" && lang!="mermaid" && lang!="flow")||(lang=="plantuml"&&!this.options.offlineUML)) {
              code = out;
            }
          }
        }
        //code = code.replace(/\n$/, '').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#39;/g, '\'') + '\n';

        if(lang=="mermaid"){
          return `
                <pre><div class="mermaid">
                ${code}
                </div></pre>`;
        }
        if(lang=="flow"){
        return '<pre><div id="flowchart" class="'
          + this.options.langPrefix
          + escape(lang, true)
          + '">'
          + (escaped ? code : escape(code, true))
          + '</div></pre>\n';
        }
        if(lang=="plantuml" &&this.options.offlineUML){
          var lines = code.split('\n');
          //忘记写startuml的情况
          if(lines[0]!="@startuml"){
            lines.unshift("@startuml");
            lines.push("@enduml");
          }
          code=lines.join("\n");
          //console.log(code);
          var fileName=preview_path+"/tmp"+code.hashCode()+".txt";
          var imgName=preview_path+"/tmp"+code.hashCode()+".svg";
          //var jarPath= path.resolve(preview_path,defaultJarPath);
          var jarPath= defaultJarPath
          //console.log(jarPath);
          //写完成后再开始转换
          try {
            fs.accessSync(jarPath,fs.constants.R_OK);
          } catch (err) {
            console.error('\x1B[31m%s\x1B[0m',"Error! Don't exsit: \""+jarPath+'\"');
          }
          fs.writeFileSync(fileName,code);
          shell.exec("java -jar "+jarPath+" "+fileName+" -tsvg;");
          shell.rm('-f', fileName);
          var img64 = base64Img.base64Sync(imgName);
          shell.rm('-f', imgName);

          return '<pre><img src=\"'
            + img64
            + '\"></pre>\n';
        }

        if (!lang) {
          return '<pre><code>'
            + (escaped ? code : escape(code, true))
            + '</code></pre>\n';
        }

        return '<pre><code class="'
          + this.options.langPrefix
          + escape(lang, true)
          + '">'
          + (escaped ? code : escape(code, true))
          + '</code></pre>\n';
        },
        image(href, title, text) {
        //href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
          return text;
        }

        if(this.options.convertImg){
          if(checkURL(href)){
          }else{
            //var imgPath=preview_path+"/"+href;
            var imgPath=path.resolve(path.dirname(source_file_name),href);
            //console.log(imgPath);
            try{
            fs.accessSync(imgPath);
            href = base64Img.base64Sync(imgPath);
            }catch(err){
              console.log('Error, file: \"'+imgPath+'\" does not exsit!');
            }
          }
        }
        //console.log(href);
        let out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
        },
        paragraph(text) {
        // istexinline - 该文本是否有行内公式
        var isTeXinline= /\$(.*)\$/g.test(text);
        // istexline - 该文本是否有行间公式
        var isTeXline= /\$\$[^]*\$\$/gm.test(text);
        if (!isTeXline && isTeXinline) {
          // 行内公式
          text = text.replace(/<del>/g, "\~").replace(/<\/del>/g, "\~");
        } else if(isTeXline){
          // 行间公式
          text = text.replace(/<br>/gm, " ");
          text = text.replace(/<del>/g, "\~").replace(/<\/del>/g, "\~");
        }
        return '<p>' + text + '</p>\n';
        }
      };
      marked.use({renderer});

			// marked = require('gulp-markdown-livereload')
			marked.parse(data.toString(), options, function (err, data) {
				if (err) {
					log('err ' + err)
					return
				}
				log(data)

				var css_link = "ddsds"
				var data1 = {
					"title":  _file_name,
					"parse_markdown": data
				}

				//var final_html_content = new Buffer(template(data1))
				var final_html_content =Buffer.from(template(data1))

				log(dest_file_path)

				if (options.index === true) {
					dest_file_path = dest_file_path.replace('README', 'index')
				}

				log(dest_file_path)

				fs.writeFile(dest_file_path, final_html_content, function (err) {
					if (err) throw err
					console.log('\x1B[32mIt\'s saved!')

				})
			})
		})
	})
}


//generator('sample.md')

module.exports = generator
