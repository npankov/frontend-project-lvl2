![Comparing Files](https://github.com/npankov/frontend-project-lvl2/workflows/Comparing%20Files/badge.svg) [![Maintainability](https://api.codeclimate.com/v1/badges/07161708789607c39140/maintainability)](https://codeclimate.com/github/npankov/frontend-project-lvl2/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/07161708789607c39140/test_coverage)](https://codeclimate.com/github/npankov/frontend-project-lvl2/test_coverage)

# GenDiff utilite
### About
GenDiff utilite for comparing .json, .yml, .ini files.  
There are three types of possible formats output you can choose to watch the difference: plain, nested, json.

### Install

    git clone https://github.com/npankov/frontend-project-lvl2
    npm install
    make publish
    make link

---

### Usage (comparing .json files)
To start you type in the terminal  

    gendiff --format plain/nested/json 'firstfile.json' 'secondfile.json'
To compare files you should choose output format plain, nested or json  
'firstfile.json' and 'secondfile.json' - it's the path to the file (without quotes)

[![asciicast](https://asciinema.org/a/lKvEtEoBRy13a954ORCdy75rl.svg)](https://asciinema.org/a/lKvEtEoBRy13a954ORCdy75rl)

---

### Usage (comparing .yml files)
To start you type in the terminal  

    gendiff --format plain/nested/json 'firstfile.yml' 'secondfile.yml'
To compare files you should choose output format plain, nested or json  
'firstfile.yml' and 'secondfile.yml' - it's the path to the file (without quotes)
 
[![asciicast](https://asciinema.org/a/3wCHryYbB1aZ81o4YzV6zFI8P.svg)](https://asciinema.org/a/3wCHryYbB1aZ81o4YzV6zFI8P)

---

### Usage (comparing .ini files)
To start you type in the terminal  

    gendiff --format plain/nested/json 'firstfile.ini' 'secondfile.ini'
To compare files you should choose output format plain, nested or json  
'firstfile.ini' and 'secondfile.ini' - it's the path to the file (without quotes)
 
[![asciicast](https://asciinema.org/a/V1ytihZh1FU5lqnlFxsiyy2yq.svg)](https://asciinema.org/a/V1ytihZh1FU5lqnlFxsiyy2yq)

---
