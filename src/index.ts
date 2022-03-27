import 'reflect-metadata';
import {buildSchema} from 'type-graphql';
// eslint-disable-next-line import/no-extraneous-dependencies
import {resolvers} from '@generated/type-graphql';
import {ApolloServer} from 'apollo-server';

import {context} from './context';

const PORT = 4000;

(async () => {
  const schema = await buildSchema({resolvers});
  const server = new ApolloServer({schema, context});
  server.listen({port: PORT}).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
