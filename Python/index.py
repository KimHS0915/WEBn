#!C:\Users\hs\AppData\Local\Programs\Python\Python37\python.exe

import os
import cgi
import view
from html_sanitizer import Sanitizer

sanitizer = Sanitizer()

print("Content-Type: text/html")
print()
form = cgi.FieldStorage()
if 'id' in form:
    title = pageId = form["id"].value
    description = open('data/'+pageId, 'r').read()
    title = sanitizer.sanitize(title)
    description = sanitizer.sanitize(description)
    update_link = '<a href="update.py?id={}">update</a>'.format(pageId)
    delete_action = """
        <form action="process_delete.py" method="post">
            <input type="hidden" name="pageId" value="{}">
            <input type="submit" value="delete">
        </form>
    """.format(pageId)
else:
    title = pageId = 'Welcome'
    description = 'Hello, web'
    update_link = ''
    delete_action = ''
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
  {update_link}
  {delete_action}
  <h2>{title}</h2>
  <p>{desc}<p>
<body>
</html>
""".format(
    title=title,
    desc=description,
    str_lst=view.get_list(),
    update_link=update_link,
    delete_action=delete_action))