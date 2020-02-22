install:
	npm install

start:
	npx babel-node src/bin/gendiff.js /home/panek/beforeNested.json /home/panek/afterNested.json

publish:
	npm publish --dry-run

build:
	npm run build

test:
	npm test

test-coverage:
	npm test -- --coverage

link:
	sudo npm link

lint:
	npx eslint .