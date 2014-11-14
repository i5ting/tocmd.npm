'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var assign = require('object-assign');
var fs = require('fs');
var BufferHelper = require('bufferhelper');

var Handlebars = require('handlebars');


module.exports = function (options) {
	
	options = assign({}, options);

	// if (options.host === undefined) {
	// 	throw new gutil.PluginError('gulp-ftp', '`host` required');
	// }
	
	var markdown_livereload = options.markdown_livereload || true;
	console.log('markdown_livereload='+markdown_livereload);
	// var marked;
	//
	// if (markdown_livereload === true) {
	//
	// }

	
	// else{
// 		marked = require('gulp-markd');
// 	}
//
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-trans', 'Streaming not supported'));
			return;
		}
		
		var rs = fs.createReadStream('res/template.html', {encoding: 'utf-8', bufferSize: 11}); 
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

		
	});
};
