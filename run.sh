#!/usr/bin/env bash
## Script to run the docker container
##
## Copyright (C) 2022 fslatam
##
## USAGE
#-    bash run.sh <product> <port>
## EXAMPLE
#-    bash run.sh crued 4001

product="$1"
port="$2"

function check_parameter() {
  if [ -z "$1" ]; then
    echo "Missing the parameter for <$2>"
    exit 1
  fi
}

check_parameter "$product" "product"
check_parameter "$port" "port"

echo "Removing old container..."
docker rm -f frontend-$product 2>/dev/null

docker run \
  -p $port:80 \
  --name frontend-$product \
  --restart=always \
  -d \
  fslatam/frontend-$product:latest
