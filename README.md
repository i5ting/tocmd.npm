tocmd.npm
=========

此gem是占位，目前有ruby版本

## usage

	npm install tocmd
	
	
	
## basic

current path

	var pwd = process.cwd()


file path 

	__dirname
	
	
use shelljs judge dir is

	if (test('-d', preview_path)) { 
		/* do something with dir */ 
		mkdir('-p', preview_path);
	};
	
http://documentup.com/arturadib/shelljs

- '-b', 'path': true if path is a block device
- '-c', 'path': true if path is a character device
- '-d', 'path': true if path is a directory
- '-e', 'path': true if path exists
- '-f', 'path': true if path is a regular file
- '-L', 'path': true if path is a symboilc link
- '-p', 'path': true if path is a pipe (FIFO)
- '-S', 'path': true if path is a socket