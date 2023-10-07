ARG BUILDER_IMAGE=oven/bun:1.0
ARG PRODUCTION_IMAGE=nginx:1.25-alpine

# Download dependencies & build the application
FROM ${BUILDER_IMAGE} AS build
WORKDIR /src
COPY ./package.json ./bun.lockb ./
RUN bun install
COPY . .
RUN bunx --bun vite build

# Build a small image for production
FROM ${PRODUCTION_IMAGE} AS production
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /src/dist /usr/share/nginx/html/
