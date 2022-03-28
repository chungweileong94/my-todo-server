import 'reflect-metadata';
import {buildSchema} from 'type-graphql';
import {ApolloServer} from 'apollo-server';
import {resolvers} from '@generated/type-graphql';

import {context} from './context';

const PORT = process.env.PORT || 4000;

(async () => {
  const schema = await buildSchema({resolvers});
  const server = new ApolloServer({schema, context});
  server.listen({port: PORT}).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
