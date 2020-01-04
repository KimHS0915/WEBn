#!C:\Users\hs\AppData\Local\Programs\Python\Python37\python.exe
import os
import cgi

files = os.listdir('data')
str_lst = ''
for item in files:
    str_lst = str_lst + '<li><a href="index.py?id={name}">{name}</a></li>'.format(name=item)

print("Content-Type: text/html")
print()
form = cgi.FieldStorage()
if 'id' in form:
    pageId = form["id"].value
    description = open('data/'+pageId, 'r').read()
else:
    pageId = 'Welcome'
    description = 'Hello, web'
print("""<!doctype html>
<html>
<head>
  <title>WEB1 - html</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.py">WEB</a></h1>
  <ol>
    {str_lst}
  </ol>
  <a href="create.py">create</a>
  <h2>{title}</h2>
  <p>{desc}<p>
<body>
</html>
""".format(title=pageId, desc=description, str_lst=str_lst))