#!/bin/sh

score=0

rm dest/style.css

grunt sass ; 

if [ $? -eq 0 ] ; then 
    # echo "one"
    if [ -e "dest/style.css" ]; then
        echo "adding score + 35"
        score=$((score+35)) 
    fi
fi



file1= wc -c <  "dest/style.css"
grunt cssmin ; 

if [ $? -eq 0 ] ; then 
    file2= wc -c <  "dest/style.css"
        if [ $file2 -lt     $file1 ]; then
            echo "adding score + 35"
            score=$((score+30)) 
    fi

fi


rm dest.zip
# grunt compress ; 
grunt abc;

if [ $? -eq 0 ] ; then 
    if [ -e "dest.zip" ]; then
        score=$((score+35)) 
    fi
fi

echo "FS_SCORE:$score%"