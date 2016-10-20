i5ting_toc
=========

[![npm version](https://badge.fury.io/js/i5ting_toc.svg)](http://badge.fury.io/js/i5ting_toc)

i5ting_toc  a node npm wrapper of i5ting_ztree_toc https://github.com/i5ting/i5ting_ztree_toc 

- [ruby版本tocmd](https://github.com/i5ting/tocmd.gem)
- [node版本i5ting_toc](https://github.com/i5ting/tocmd.npm)

## Preview 

![](https://github.com/i5ting/i5ting_ztree_toc/blob/master/demo/3.png)

## Install 

	npm install -g i5ting_toc
	
## Usage

```
➜  tocmd.npm git:(master) ✗ i5ting_toc -h

  Usage: i5ting_toc  a node npm wrapper of i5ting_ztree_toc https://github.com/i5ting/i5ting_ztree_toc 

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -f, --file [filename]  default is README.md 
		-o, --open             open in browser
    -v, --verbose          打印详细日志
```

这个版本的命令比较简单，只有一个`-f`参数，如果没有填写，默认使用`README.md`，常见用法

	i5ting_toc -f sample.md -o
	
## Api Usages

示例说明

```
var is_open = true;
var markd_config = {
	debug: false,
  index: true
}
//函数可以返回当前正在执行的项目路径
var pwd = process.cwd()  

var source_file_name = pwd + '/' + source_file
var file_name = source_file_name.split('/').pop();;
var _file_name = file_name.split('.')[0];

var dest_file_path = pwd + '/preview/' + _file_name + '.html';

console.log('pwd=' + pwd);
console.log('source_file_name=' + source_file_name);
console.log('dest_file_path=' + dest_file_path);

require('../index')(pwd, source_file_name, dest_file_path, is_open, markd_config);

```

参数说明

- pwd是存放preview的位置
- source_file 要编译的mardown文件
- dest_file_path 生成的html完整路径和文件名
- is_open 是否在编译后使用浏览器中打开html
- markd_config 编译md的选项（具体见 https://github.com/chjj/marked ）

## Basic

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

template for compile use [handlebars](http://handlebarsjs.com/)


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 推荐

- [mac-dev-setup](http://aaaaaashu.gitbooks.io/mac-dev-setup/content/index.html)
- [How To Build A CLI Tool With Node.js And PhantomJS](http://www.smashingmagazine.com/2014/02/12/build-cli-tool-nodejs-phantomjs/)

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
