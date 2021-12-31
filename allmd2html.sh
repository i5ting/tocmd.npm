#!/bin/bash

function read_dir() {
    for file in `ls $1`
    do
        if [ -f $1"/"$file ]; # 判断是否是文件，输出屏幕
        then
            echo  $1"/"$file
        fi
    done
}
for file in $(read_dir .)
do
  if [ "${file##*.}"x = "md"x ];then
    md2html -u -i $file;
    wait;
  fi
done

