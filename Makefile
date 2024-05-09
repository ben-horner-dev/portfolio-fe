run-dev:
	docker-compose -f ./tools/docker/docker-compose-dev.yml up

build-dev:
	docker-compose -f ./tools/docker/docker-compose-dev.yml build --no-cache
