import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

type ApolloContext = {
  prisma: PrismaClient;
};

export const context: ApolloContext = {
  prisma,
};
