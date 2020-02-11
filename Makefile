install:
	npm install

start:
	npx babel-node src/bin/gendiff.js /home/panek/before.json /home/panek/after.json

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage

link:
	sudo npm link

lint:
	npx eslint .