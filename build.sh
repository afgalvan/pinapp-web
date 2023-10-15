#!/usr/bin/env bash
## Script to build the docker image
##
## USAGE
#-    bash build.sh

image="sabores-del-valle-web"

tag=$(cat package.json | awk -v FS='("version": "|",)' '{print $2}' | awk -v ORS='' '{gsub(/[[:space:]]/,""); print}')
echo "Building version $image:$tag"

docker build -t "$image:$tag" -t "$image:latest" .
