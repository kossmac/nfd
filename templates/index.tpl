<!DOCTYPE html>
<html>
<head>
    <title>Icinga from distance</title>
    <link rel="stylesheet" type="text/css" href="/static/style.css" media="all"/>
</head>
<body>
%if warning == [] :
<h2>no warnings</h2>
%else:
<ul id="warning">
    %for status in warning:
    <li>{{status}}</li>
    %end
</ul>
%end
%if critical == [] :
<h2>no criticals</h2>
%else:
<ul id="critical">
    %for status in critical:
    <li>{{status}}</li>
    %end
</ul>
%end
</body>
</html>