#!/usr/bin/env bash
## Script to build the docker image
##
## Copyright (C) 2022 fsteam
##
## USAGE
#-    bash build.sh <product> <vault-token> <vault-addres> [business] [env]
## EXAMPLE
#-    bash build.sh sve token1234 http://vault.host.com

product="$1"

tag=$(cat package.json | awk -v FS='("version": "|",)' '{print $2}' | awk -v ORS='' '{gsub(/[[:space:]]/,""); print}')
echo "Building version fslatam/frontend-$product:$tag"

docker build -t "fslatam/frontend-$product:$tag" -t "fslatam/frontend-$product:latest" .
