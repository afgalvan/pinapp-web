terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.2"
    }
  }
}

provider "docker" {}

resource "docker_image" "web" {
  name         = "sabores-del-valle-web"
  keep_locally = true
}

resource "docker_container" "web" {
  image = docker_image.web.name
  name  = "sabores-del-valle-web"
  ports {
    internal = 80
    external = 80
  }
}
