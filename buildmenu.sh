#!/bin/bash
# menus = ''
function getdir(){
    for element in `ls $1`
    do  
        dir_or_file=$1'/'$element
        if [ -d $dir_or_file ]
        then 
            getdir $dir_or_file
        else
            name=`getName $element`;
            echo 'name'$name;
            # menus=$menus$dir_or_file
            # echo $dir_or_file
        fi  
    done
}

function getName(){
    var=$1;
    # ## ：${var##*string}解释：从左边开始，删除最后一个string以及左边的所有内容。
    var=${var##*/}
    # %% ：${var%%string*} 解释：从右边开始，删除遇到的最后（也就是最左边）一个string以及右边所有内容。
    var=${var%%.*}
    return $var;
}

root_dir="./"
getdir $root_dir
# echo 'menus'$menus
#以下命令均不包含"."，".."目录，以及"."开头的隐藏文件，如需包含，ll 需要加上 -a参数
#当前目录下文件个数，不包含子目录
# ll |grep "^-"|wc -l
# #当前目录下目录个数，不包含子目录
# ll |grep "^d"|wc -l
# #当前目录下文件个数，包含子目录
# ll -R|grep "^-"|wc -l
# #当前目录下目录个数，包含子目录
# ll -R|grep "^d"|wc -l