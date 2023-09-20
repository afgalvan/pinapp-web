# Sabores del Valle Fluid System

## Local development

Clone the repo

```sh
git clone https://github.com/afgalvan/sabores-del-valle.git
```

Tools needed for local development.

- [bun.sh](https://bun.sh/)

1. Installation

```sh
curl -fsSL https://bun.sh/install | bash
```

2. Install Dependencies

```sh
bun install
```

3. Run the project

```sh
bun run dev
```

## Run with Docker

1. Build the docker Image

```sh
docker build -t image-builder .
```

2. Run the container

```sh
docker run \
  -p $port:80 \
  --name image-builder \
  --restart=always \
  -d \
  image-builder
```
