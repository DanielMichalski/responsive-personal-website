#!/bin/bash

docker-compose rm -f -s -v
docker-compose build
docker-compose up -d
