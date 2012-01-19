#!/usr/bin/python

import urllib2
import json
from pprint import pprint

my_realm = ""
my_uri = ""
my_user = ""
my_passwd = ""

auth_handler = urllib2.HTTPBasicAuthHandler()
auth_handler.add_password(realm = my_realm, uri = my_uri, user = my_user, passwd = my_passwd)
opener = urllib2.build_opener(auth_handler)
urllib2.install_opener(opener)
#response = urllib2.urlopen(my_uri)

icinga = json.loads(urllib2.urlopen(my_uri).read())
for f_k, f_v in icinga.iteritems():
	print f_v.items()
