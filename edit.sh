#!/bin/bash

if [[ -d "usr/websad" ]]; then cd "usr/websad"; fi
line="sba.sh index.html "
if [ "$(ls -A 'pages')" ]; then line="$line pages/*"; fi
if [ "$(ls -A 'styles')" ]; then line="$line styles/*"; fi
#if [ "$(ls -A 'misc')" ]; then line="$line misc/*"; fi
editor $line
