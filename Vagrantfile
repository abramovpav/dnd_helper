# -*- mode: ruby -*-
# vi: set ft=ruby :


$script = <<SCRIPT
echo 'source /usr/local/bin/virtualenvwrapper.sh' >> ~/.bashrc
source /usr/local/bin/virtualenvwrapper.sh
source ~/.bashrc
mkvirtualenv project -p python2.7
workon project
SCRIPT


Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.box_check_update = false
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 5432, host: 5433

  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.provision :shell, privileged: false, inline: $script

  config.vm.synced_folder "./", "/vagrant", mount_options: ["dmode=775,fmode=664"]

  config.vm.provider "virtualbox" do |vb|
     vb.name = "ubuntu-xenial-16.04-dnd-helper"
     vb.memory = 1024
  end
end
