#!/usr/bin/env bash
cd "${0%/*}" || exit  # pwd指向.sh文件所在位置


npm install;
wait;
source="alias md2html='"`pwd`"/bin/md2html.js '";
path=`pwd`"/bashrc";
echo $source>$path;
echo "export PATH=`pwd`:\$PATH">>$path;
usage=$'#usage - add this line to ~/.bashrc(delete "#" mark):\n#source '$path
echo "$usage">>$path;
