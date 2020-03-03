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

    gendiff --format plain/nested 'firstfile.json' 'secondfile.json'
for compare files you should choose format plain or nested
'firstfile.json' and 'secondfile.json' - it's the path to the file, with its name (without quotes)

[![asciicast](https://asciinema.org/a/BWC9qyTxVPcXysdim8ZSnJjTH.svg)](https://asciinema.org/a/BWC9qyTxVPcXysdim8ZSnJjTH)

---

### Using (comparing .yml files)
To start you type in the terminal  

    gendiff 'firstfile.yml' 'secondfile.yml'
'firstfile.yml' and 'secondfile.yml' - it's the path to the file, with its name (without quotes)
 
[![asciicast](https://asciinema.org/a/xu5Bxv3fOcMe21xiGXsFoBohU.svg)](https://asciinema.org/a/xu5Bxv3fOcMe21xiGXsFoBohU)

---

### Using (comparing .ini files)
To start you type in the terminal  

    gendiff 'firstfile.ini' 'secondfile.ini'
'firstfile.ini' and 'secondfile.ini' - it's the path to the file, with its name (without quotes)
 
[![asciicast](https://asciinema.org/a/uPjVnJnC0KYQXoV5UWmrKyNfu.svg)](https://asciinema.org/a/uPjVnJnC0KYQXoV5UWmrKyNfu)

---
