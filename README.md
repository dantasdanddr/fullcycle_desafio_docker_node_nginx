# Curso FullCycle - Desafio Docker com Proxy Reverso
Projeto para criação de imagens docker com `mysql`, `nodejs` e `nginx` utilizando `proxy reverso`.

## Objetivo
Retorno de `pessoas` no browser com a linguagem `JavaScript` acessando pelo `nginx`.

### Pré-Requisito
Ter instalado no seu ambiente:
- docker versão: 25.0.0 - ( [link para instalação](https://docs.docker.com/engine/install/) )
- docker compose versão: 25.0.0 - ( [link para instalação](https://docs.docker.com/compose/install/linux/) )

## Instalação
+ Clone o repositório:
  ```
  git clone https://github.com/dantasdanddr/fullcycle_desafio_docker_node_nginx.git
  ```
+ Acesse a pasta do projeto:
  ```
  cd fullcycle_desafio_docker_node_nginx
  ```
+ Rode o arquivo docker-compose.yaml:
  ```
  docker compose up
  ```
+ Acesse a aplicação pelo navegador na porta 8080:
  ```
  localhost:8080
  ```
### Observações ___docker compose___
| Comando | Detalhes |
|---|---|
| `docker compose up`  | Inicia os containers sem construir as imagens (___se já existirem localmente___) |
| `docker compose up -d`  | Inicia os containers em segundo plano. |
| `docker compose up --build`  | Constrói as imagens e inicia os containers. |
| `docker compose up -d --build`  | Constrói as imagens e inicia os containers em segundo plano. |