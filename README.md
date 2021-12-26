# md2html


A tool that converts markdown(`.md`) file to **single**, **offline** html(`.html`) file.

## Features

1. Portability: Include everything in **only one** `.html` file
2. Convenience: **No** internet access  
----------------  
- Powerful markdown compatibility (use [marked](https://github.com/markedjs/marked) as its parser and compiler)
- Table of contents preview (TOC will be created at the left side)
- TOC automatic numbering (no need of manual nubmering. When already numbered, it won't renumbering if the number is correct)
- Image to base64 (find all `localized` images embedded to markdown and convert them to base64 encoded data)
- LaTeX support (use [KaTeX](https://katex.org/), all font files have converted into base64 encoded data)
- [PlantUML](https://plantuml.com/zh/starting) support (convert uml to encoded `<img>` links or use `plantuml.jar` to generate `.svg` files)
- [mermaid](https://github.com/mermaid-js/mermaid) support
- [flowchart](https://github.com/adrai/flowchart.js) support


## Demo


1. [basicTest(in Chinese)](https://chengpengzhao.com/md2html/test/commTest.html)  
2. [katexSupportTest](https://chengpengzhao.com/md2html/test/katexSupportTest.html)  
3. [latexTest1(in Chinese)](https://chengpengzhao.com/md2html/test/latexTest.html)  
3. [latexTest2(in Chinese)](https://chengpengzhao.com/md2html/test/tensorTest.html)  

## Usage

```sh
# 1:
git clone https://github.com/chengpengzhao/md2html
# 2: edit plantuml.jar path in package.json
# 3:
npm install
# 4:
npm run build
# or run ./install.sh, then add sripts in bashrc to ~/.bashrc
# 5: add environment to PATH
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## VersionLog

- v2.0.0  initial version (forked and modified from [tocmd.npm v1.1.5](https://github.com/i5ting/tocmd.npm))


## License

Copyright (c) 2021, [cpZhao](https://github.com/chengpengzhao). ([MIT License](http://www.opensource.org/licenses/MIT))  

