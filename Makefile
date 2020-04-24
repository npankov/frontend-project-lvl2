install:
	npm install

start:
	npx babel-node src/bin/gendiff.js --format plain ~/projects/frontend-project-lvl2/__tests__/__fixtures__/beforeNested.json ~/projects/frontend-project-lvl2/__tests__/__fixtures__/afterNested.json

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