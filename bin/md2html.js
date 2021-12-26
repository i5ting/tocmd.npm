#!/usr/bin/env node
/**
 * Module dependencies.
 */
function isDefined(x) { return x !== null && x !== undefined }
Array.prototype.contain = function (obj) {
	return this.indexOf(obj) !== -1
}

var program = require('commander')
var path=require("path");
var version = require("../package.json").version
var defaultJarPath = require("../package.json").plantumlPath
//var defaultJarPath="./plantuml.jar";
var pwd = process.cwd()

program
	.version(version)
	.usage("can convert markdown(.md) file to single html file(offline), which is a modified tocmd.npm(a npm wrapper of i5ting_ztree_toc) tool")
	.option('-i, --intputfile <filename>', '.md file location, default is README.md ',"README.md")
	.option('-o, --output-path <path>', 'output .html PATH, default PATH is the same with .md file')
	.option('-d, --debug', 'print detailed information(for debug)')
	.option('-n, --no-convert-img', 'don\'t convert local images to base64 when generating .html file')
	.option('-u, --uml-path [path]', 'plantuml.jar PATH to generate offilne UML images(require java!), default PATH is \"'+defaultJarPath+'\"')
	.parse(process.argv)

const options=program.opts();

var filename = options.intputfile
var debug = false
var offlineuml = false


if (options.debug) {
	debug = options.debug;
}

if (options.umlPath!=undefined) {
  offlineuml=true;
  if(options.umlPath!=true){
    defaultJarPath=options.umlPath;
  }
}

var source_file_name = path.resolve(pwd , filename)
//var file_name = source_file_name.split('/').pop()
//var _file_name = file_name.split('.')[0]
//console.log(path.dirname(source_file_name))
//
//if (file_name.indexOf('\\') > 0) {
//	_file_name = file_name.substring(file_name.lastIndexOf("\\")).split('.')[0]
//}
var dest_file_path = path.dirname(source_file_name)+"/"+path.basename(source_file_name,".md")+".html"
if(options.outputPath){
  dest_file_path=path.resolve(options.outputPath,path.basename(source_file_name,".md")+".html"
)
  console.log(dest_file_path)

}

//settings
var markd_config = {
  //是否使用plantuml.jar生成离线的svg图（需要java）
  offlineUML: offlineuml,
  //是否将markdown中相对路径引用的图片转换为base64
  convertImg: options.convertImg,
	debug: debug,
  index: false,
  highlight: function(code, lang) {
    const hljs = require('highlight.js');
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    //console.log(language);
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  //better not to change following options
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
}


console.log('\x1B[36mpwd:\x1B[0m ' + pwd)
console.log('\x1B[36msource_file_name:\x1B[0m ' + source_file_name)
console.log('\x1B[36mdest_file_name\x1B[0m ' + dest_file_path)
console.log('\x1B[36mImgtoBase64:\x1B[0m '+options.convertImg)
console.log('\x1B[36mofflineUML:\x1B[0m '+offlineuml)
if(offlineuml){
console.log('\x1B[36mumlJarPath:\x1B[0m '+defaultJarPath)
}

require('../index')(pwd, source_file_name, dest_file_path, markd_config, defaultJarPath)
