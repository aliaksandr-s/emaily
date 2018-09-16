install-server:
	npm install --prefix client

install-client:
	npm install

install: install-server install-client

run-server:
	npm run nodemon index.js

run-client:
	npm run start --prefix client

develop: run-server run-client