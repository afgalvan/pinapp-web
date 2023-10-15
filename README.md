# Sabores del Valle Fluid System

## Local development

Clone the repo

```sh
git clone https://github.com/afgalvan/pinapp-web.git
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
bash build.sh
```

2. Run the container

- With docker run

```sh
docker run \
  -p $port:80 \
  --name pinapp-web \
  --restart=always \
  -d \
  pinapp-web
```

- With terraform

```sh
cd infra
terraform apply
```
