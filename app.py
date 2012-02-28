from bottle import run, debug, route, static_file, template
from nfd import getServiceLists
import ConfigParser

config = ConfigParser.ConfigParser()
config.read(['config.conf'])

@route("/")
def index():
    uri = config.get('monitor', 'uri') + '?jsonoutput'
    realm = config.get('monitor', "realm")
    user = config.get('monitor', "user")
    passwd = config.get('monitor', "password")

    warning, critical, okay = getServiceLists(uri, realm, user, passwd)
    if warning is None and critical is None:
        return "<h1>Failed to fetch data</h1>"

    return template("templates/index.tpl", warning=warning, critical=critical, okay=okay)

@route("/static/:file#.*#")
def files(file):
    return static_file(file, root="static/")

if __name__ == "__main__":
    debug()
    run(host="localhost")