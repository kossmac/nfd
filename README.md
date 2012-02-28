# nagios from distance #

## Status Monitor to view your current Nagios/Icinga ##

### Requirements ###

1. python-bottle - http://bottlepy.org/
    - easy_install bottle
2. python-configparser
    - easy_install configparser
3. Nagios/Icinga installation

### Configuration ###

1. After checkout change to folder nfd
2. edit example.conf and name it config.conf
    - URI: http://your.(nagios/icinga)-host.com/(nagios/icinga)
    - USER (optional): basic auth user
    - PASSWORD (optional): the corresponding password
    - REALM (optional): the access-realm if you protected your site with an http basic auth
3. nohup python app.py &
4. Browse to http://localhost:8080/