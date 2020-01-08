install:
	npm install
start:
	npx babel-node src/bin/gendiff.js
publish:
	npm publish --dry-run
publink:
	make publish && npm link
lint:
	npx eslint .