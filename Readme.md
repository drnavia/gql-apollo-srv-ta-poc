<img src="http://drnavia.com/logos/POC-GraphQL-2019.png"></img>

## API GraphQL (MongoDB) - [Dockerizada]
![Branch stable](https://img.shields.io/badge/branch-master-blue.svg)
![version](https://img.shields.io/badge/node-v8.x-6BBE50.svg)
![version](https://img.shields.io/badge/express-v4.x-D7D7D7.svg)
![version](https://img.shields.io/badge/mongodb-v4.x-499D4A.svg)
![version](https://img.shields.io/badge/graphql-v14.x-E10098.svg)
![version](https://img.shields.io/badge/apollo-v2.x-024561.svg)
![version](https://img.shields.io/badge/docker%20compose-build-309CEC.svg)<br>
Despliegue la API GraphQL (Query/Mutation) desarrollada con Node, Express, GraphQL y Apollo Server (conectada a la base de datos MongoDB, utilizando Mongoose como ORM). La API permite interactuar con el **listado de Países con Estados y Localidades**.<br>

## Pre-requisitos
Debes tener instalado:
+ Git
+ Docker
+ Docker Compose

## Despliegar la API
1. Clonar el repo:
```bash
git clone https://github.com/drnavia/poc-gql-apollo-srv.git
```
2. Construir la imagen del contenedor con Docker Compose:
```bash
docker-compose -f dc-gql-apollosrv.yml build
```
3. Levantar el contenedor de la API:
```bash
docker-compose -f dc-gql-apollosrv.yml up -d
```
4. Verificar que el contenedor se encuentre levantado:
```bash
docker-compose -f dc-gql-apollosrv.yml ps
```
5. Ingresar a la siguiente URL para comprobar que la API este levantada:<br>
[http://localhost:8008](http://localhost:8008)

## Probar la API
Se puede utilizar el **Playground de GraphQL** para interactuar con la API.<br>
[http://localhost:8008/graphql](http://localhost:8008/graphql)

### Ejecutar la siguiente Query para ver el codpais y el nombpais de los países almacenados en la base:

```
query{
  obtenerPaises{
    codpais
    nombpais
  }
}
```

### Ejecutar la siguiente Mutation para crear un pais (Bélgica):
```
mutation {
	crearPais(input:{
		codpais: "BEL"
		nombpais: "Belgica"
    continente: AMERICA
	}) {
		codpais
		nombpais
    continente
	}
}
```


<br><br>
**[ DrN ]**
