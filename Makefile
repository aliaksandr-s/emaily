UNIQUE_SUBDOMAIN = woiefjskdjfio23iskdlfjfe

install-server:
	npm install

install-client:
	npm install --prefix client

install: install-server install-client

run-server:
	npm run nodemon index.js

run-client:
	npm run start --prefix client

run-webhook:
	npm run localtunel -- --port 5000 -s ${UNIQUE_SUBDOMAIN}

run-db:
	docker-compose up

develop: run-db run-server run-webhook run-client