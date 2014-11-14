'use strict';
require('shelljs/global');
var assign = require('object-assign');
var fs = require('fs');
var BufferHelper = require('bufferhelper');
var Handlebars = require('handlebars');
var open = require("open");

function log(str){
	console.log(str);
}

function generator(file_name, is_open, options) {
	var _file_name = file_name.split('.')[0];
  
	// 点号表示当前文件所在路径  
	var str = fs.realpathSync('.');  
	log(str);  
	
	//函数可以返回当前正在执行的项目路径
	var pwd = process.cwd()  
	//:属性返回的是  nodejs 的安装路径 
	// processor.execPath 
	
	var preview_path = pwd + '/preview';
	
	var source_file_path = __dirname + '/' + _file_name + '.md';
	
	var dest_file_path = pwd + '/preview/' + _file_name + '.html';
	
	if (test('-d', preview_path)) { 
		/* do something with dir */ 
		mkdir('-p', preview_path);
	};
	
	cp_template_dir(__dirname, preview_path);
	_toc_config(__dirname, preview_path);
	
	function cp_template_dir(_cur_dir,_dest_dir){
		var i = _cur_dir;
		log(i);
	
		cp('-R', _cur_dir +'/vendor/toc', _dest_dir+'/');
	}
	
  function _toc_config(_cur_dir,_dest_dir){
		if (test('-d', _dest_dir + "/toc_conf.js")) { 
			log('toc_conf file exist')
		}else{
     cp('-R', _cur_dir +'/vendor/toc_conf.js', _dest_dir+'/');
		}
  }
	
	var template_path = __dirname + '/vendor/template.html';
	log('template_path = ' + template_path);
	
	fs.readFile(source_file_path, function (err, data) {
	  if (err) throw err;
	  console.log(data);
		
		var rs = fs.createReadStream(template_path, {encoding: 'utf-8', bufferSize: 11}); 
		var bufferHelper = new BufferHelper();

		rs.on("data", function (trunk){
				bufferHelper.concat(trunk);
		});
	
		rs.on("end", function () {
			var source = bufferHelper.toBuffer().toString();
			var template = Handlebars.compile(source);
		
			console.log(template);
		
			var	marked = require('marked');	
			// marked = require('gulp-markdown-livereload');
			marked(data.toString(), options, function (err, data) {
				if (err) {
					console.log('err ' + err);
					return;
				}
				console.log(data);
			
				var css_link = "ddsds";
				var data1 = {
					"title":"i5ting_ztree_toc:" + _file_name,
					"parse_markdown": data
				};
		
				var final_html_content = new Buffer( template(data1) );
				fs.writeFile(dest_file_path, final_html_content , function (err) {
				  if (err) throw err;
				  console.log('It\'s saved!');
					
					if(is_open == true){
						open(dest_file_path);
					}
				});
			});
		});
	});
};

// generator('sample.md')

module.exports = generator