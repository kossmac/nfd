#!/usr/bin/python

import urllib2
import json

def getServiceLists(uri, realm = None, user = None, passwd = None):
    if realm is not None:
        auth_handler = urllib2.HTTPBasicAuthHandler()
        auth_handler.add_password(realm = realm, uri = uri, user = user, passwd = passwd)
        opener = urllib2.build_opener(auth_handler)
        urllib2.install_opener(opener)
    try:
        icinga = json.loads(urllib2.urlopen(uri).read())
    except urllib2.HTTPError:
        return None, None

    critical = list()
    warning = list()

    for service in icinga['status']['service_status']:
        if service['status'] == 'WARNING':
            warning.append(service)
        elif service['status'] == 'CRITICAL':
            critical.append(service)

    return warning, critical