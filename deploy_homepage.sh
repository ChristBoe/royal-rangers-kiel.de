#!/bin/bash

# install latest curl version
wget https://curl.haxx.se/download/curl-7.62.0.tar.gz
tar -xvf curl-7.62.0.tar.gz
cd curl-7.62.0/
./configure
make
sudo make install
cd ..

# copy new version to server
find . -type f -not -path "./.git/*" -not -path "./deploy_homepage.sh" -not -path "./.travis.yml" -exec curl --disable-epsv --retry 5 --retry-connrefused -v -u $FTP_USER:$FTP_PASSWORD --ftp-create-dirs -T {} ftp.royal-rangers-kiel.de/new_homepage/{} \;
