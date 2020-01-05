import os
from html_sanitizer import Sanitizer

def get_list():
    sanitizer = Sanitizer()
    files = os.listdir('data')
    str_lst = ''
    for item in files:
        item = sanitizer.sanitize(item)
        str_lst = str_lst + '<li><a href="index.py?id={name}">{name}</a></li>'.format(name=item)
    return str_lst