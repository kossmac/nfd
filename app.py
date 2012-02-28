from bottle import run, debug, route, static_file, template, request
from nfd import getServiceLists

@route("/")
@route("/", method="GET")
def index():
    uri = request.GET.get("uri", "") + '/cgi-bin/status.cgi?jsonoutput'
    realm = request.GET.get("realm", None)
    user = request.GET.get("user", None)
    passwd = request.GET.get("passwd", None)

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