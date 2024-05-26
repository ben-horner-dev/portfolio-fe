run-dev:
	docker-compose -f ./tools/docker/docker-compose-dev.yml -p portfolio-dev up
build-dev:
	docker-compose -f ./tools/docker/docker-compose-dev.yml build
run-local:
	docker-compose -f ./tools/docker/docker-compose-local.yml -p portfolio-local up
build-local:
	docker-compose -f ./tools/docker/docker-compose-local.yml build
test: 
	docker-compose -f ./tools/docker/docker-compose-dev.yml -p portfolio-dev up -d && npm run test && sudo npm run cypress:run 