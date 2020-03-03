# Frontend project level 2
# It's the console utility for comparing .json, .yml, .ini files

![Comparing Files](https://github.com/npankov/frontend-project-lvl2/workflows/Comparing%20Files/badge.svg) [![Maintainability](https://api.codeclimate.com/v1/badges/07161708789607c39140/maintainability)](https://codeclimate.com/github/npankov/frontend-project-lvl2/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/07161708789607c39140/test_coverage)](https://codeclimate.com/github/npankov/frontend-project-lvl2/test_coverage)

## For install console utility 'gendiff', you need to run following commands in the terminal

    git clone https://github.com/npankov/frontend-project-lvl2
    npm install
    make publish
    make link

---

### Using (comparing .json files)
To start you type in the terminal  

    gendiff --format plain/nested/json 'firstfile.json' 'secondfile.json'
for compare files you should choose format plain, nested or json 
'firstfile.json' and 'secondfile.json' - it's the path to the file, with its name (without quotes)

[![asciicast](https://asciinema.org/a/lKvEtEoBRy13a954ORCdy75rl.svg)](https://asciinema.org/a/lKvEtEoBRy13a954ORCdy75rl)

---

### Using (comparing .yml files)
To start you type in the terminal  

    gendiff --format plain/nested/json 'firstfile.yml' 'secondfile.yml'
for compare files you should choose format plain, nested or json  
'firstfile.yml' and 'secondfile.yml' - it's the path to the file, with its name (without quotes)
 
[![asciicast](https://asciinema.org/a/3wCHryYbB1aZ81o4YzV6zFI8P.svg)](https://asciinema.org/a/3wCHryYbB1aZ81o4YzV6zFI8P)

---

### Using (comparing .ini files)
To start you type in the terminal  

    gendiff --format plain/nested/json 'firstfile.ini' 'secondfile.ini'
for compare files you should choose format plain, nested or json  
'firstfile.ini' and 'secondfile.ini' - it's the path to the file, with its name (without quotes)
 
[![asciicast](https://asciinema.org/a/V1ytihZh1FU5lqnlFxsiyy2yq.svg)](https://asciinema.org/a/V1ytihZh1FU5lqnlFxsiyy2yq)

---
