'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var assign = require('object-assign');
var fs = require('fs');
var BufferHelper = require('bufferhelper');

var Handlebars = require('handlebars');


module.exports = function (options) {
	
	var rs = fs.createReadStream('vendor/template.html', {encoding: 'utf-8', bufferSize: 11}); 
	var bufferHelper = new BufferHelper();

	rs.on("data", function (trunk){
			bufferHelper.concat(trunk);
	});
	
	rs.on("end", function () {
		var source = bufferHelper.toBuffer().toString();
		var template = Handlebars.compile(source);
		
		// console.log(source);
		
		var	marked = require('marked');	
		// marked = require('gulp-markdown-livereload');
		marked(file.contents.toString(), options, function (err, data) {
			if (err) {
				cb(new gutil.PluginError('gulp-markdown', err, {fileName: file.path}));
				return;
			}
		
			var css_link = "ddsds";
			var data1 = {
				"css_link": "css_link",
				"parse_markdown": data
			};
		
			file.contents = new Buffer( template(data1) );
			file.path = gutil.replaceExtension(file.path, '.html');

			cb(null, file);
		});
		
	});
	
};
