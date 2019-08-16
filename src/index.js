import express from 'express';

// graphql - apollo server
import { ApolloServer } from 'apollo-server-express';
// schema & resolvers
import { typeDefs } from '../data/schema';
import { resolvers } from '../data/resolvers';

// crear la aplicacion de Express
const app = express();

// crear el Servidor de Apollo
const server = new ApolloServer({typeDefs, resolvers});

// crear el Middleware que conecta Apollo con Express
server.applyMiddleware({app});

app.get('/', (req, res) => {
    res.send('<h2>Servidor GraphQL <a href="http://localhost:8008/graphql"><b>/graphql</b></a></h2><p>El playground de GraphQL se encuentra corriendo desde <a href="http://localhost:8008/graphql"><b>http://localhost:8008/graphql</b></a></p><h3>Países, Estados y Localidades</h3>');
});

app.listen({port: 8008}, () => console.log(`>>> El servidor está corriendo desde http://localhost:8008${server.graphqlPath} <<<`));
