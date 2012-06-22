<!DOCTYPE html>
<html>
<head>
    <title>Icinga from distance</title>
    <link rel="stylesheet" type="text/css" href="/static/style.css" media="all"/>
    <script type="text/javascript" src="/static/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="/static/bigtext.js"></script>
    <script type="text/javascript" src="/static/script.js"></script>
    <META HTTP-EQUIV="REFRESH" CONTENT="150">
</head>
%if warning == [] and critical == []:
<body class="okay">
<h1>OK</h1>
    %for status in okay:
    <li>
        <h3>{{status['host']}} ({{status['service']}})</h3>
    </li>
%end
%else:
<body>
%end
%if warning != []:
%if critical == []:
<ul class="fullscreen" id="warning">
%else:
<ul id="warning">
%end
    %for status in warning:
    <li>
        <h3>{{status['host']}} ({{status['service']}})</h3>
    </li>
    %end
</ul>
%end
%if critical != []:
    %if warning == []:
        <ul class="fullscreen" id="critical">
    %else:
        <ul id="critical">
    %end
        %for status in critical:
        <li>
            <h3>{{status['host']}} ({{status['service']}})</h3>
        </li>
        %end
    </ul>
%end
</body>
</html>
