install:
	npm install

start:
	npx babel-node src/bin/gendiff.js /home/panek/before.json /home/panek/after.json

publish:
	npm publish --dry-run

build:
	npm run build

test:
	npm test

link:
	sudo npm link

lint:
	npx eslint .