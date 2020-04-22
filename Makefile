install:
	npm install

start:
	npx babel-node src/bin/gendiff.js --format plain /home/panek/beforeNested.json /home/panek/afterNested.json

publish:
	npm publish --dry-run

build:
	npm run build

test:
	npm test

test-coverage:
	npm test -- --coverage

link:
	npm link

lint:
	npx eslint .