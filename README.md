
## Description
 The Worker management system 
 
## Prerequirement
- docker version **20.10.13**

## Installation
Run this command the first time might take a couple of minutes.
```bash
# Create and run container
$ docker compose up
```

## Update the project container
```bash
$ git pull origin main

# Rebuild the container in case of the source file changes
$ docker compose build

$ docker compose up
```
