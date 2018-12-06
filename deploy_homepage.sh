#!/bin/bash

# copy new version to server
find . -type f -not -path "./.git/*" -not -path "./deploy_homepage.sh" -not -path "./.travis.yml" -exec curl --disable-epsv -v -u $FTP_USER:$FTP_PASSWORD --ftp-create-dirs -T {} ftp.royal-rangers-kiel.de/new_homepage/{} \;
