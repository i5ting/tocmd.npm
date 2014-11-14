#!/usr/bin/env node

/**
 * Module dependencies.
 */
function isDefined(x) { return x !== null && x !== undefined; } 
Array.prototype.contain = function(obj) {
  return this.indexOf(obj) !== -1;
}

var program = require('commander');
var version = require("../package.json").version;

program
  .version(version)
	.usage(" a node npm wrapper of i5ting_ztree_toc https://github.com/i5ting/i5ting_ztree_toc ")
  .option('-f, --file [filename]', ' default is README.md ')
	.option('-o, --open', 'open in browser')
	.option('-v, --verbose', '打印详细日志')
  .parse(process.argv);
	
var pwd = process.cwd()  
var filename = "README.md";
var is_open = false;

if (program.file) {
	filename = program.file;
}

if (program.open) {
	is_open = program.open;
}

var verbose = false;
if (program.verbose) {
	verbose = program.verbose;
}

var _verbose = verbose;
function log(str){
	if(_verbose == true){
		console.log(str);
	}
}

log('filename = ' + filename); 
log('verbose = ' + verbose);

var source_file = filename;

// return;
// main 
var markd_config = {
	debug: false
}
require('../index')(source_file, is_open, markd_config);