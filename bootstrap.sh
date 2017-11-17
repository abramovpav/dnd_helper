#!/usr/bin/env bash

sudo apt-get update
sudo apt-get install -y python2.7 python2.7-dev python-pip ansible
sudo apt-get install -y libpq-dev postgresql postgresql-contrib
sudo apt-get install build-essential libssl-dev libffi-dev python-dev libxml2-dev libxslt-dev libmemcached-dev
# do something with locales
echo 'export LC_ALL=C' >> ~/.bashrc
source .bashrc
# -----------------------
pip install virtualenv
pip install virtualenvwrapper
