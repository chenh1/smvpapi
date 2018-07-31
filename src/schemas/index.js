import { GraphQLSchema } from 'graphql';
import mutation from './graphql/mutations';
import subscription from './graphql/subscriptions';
import query from './graphql/queries';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

export const schema = new GraphQLSchema({
  query,
  mutation,
  subscription
});