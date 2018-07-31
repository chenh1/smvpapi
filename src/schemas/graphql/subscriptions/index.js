import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLInt } from 'graphql';
import { pubsub } from '../../index';

const subscription = new GraphQLObjectType({
    name: 'Subscription',
    fields: () => ({
      trackCreated: {
        type: GraphQLString,
        resolve: payload => payload.trackCreated.ID,
        subscribe: () => pubsub.asyncIterator('trackCreated')
      },
      trackUpdated: {
        type: GraphQLString,
        resolve: payload => payload.trackUpdated.ID,
        subscribe: () => pubsub.asyncIterator('trackUpdated')
      },
      trackDeleted: {
        type: GraphQLString,
        resolve: payload => payload.trackDeleted.ID,
        subscribe: () => pubsub.asyncIterator('trackDeleted')
      },

      sessionCreated: {
        type: GraphQLString,
        resolve: payload => payload.sessionCreated.ID,
        subscribe: () => pubsub.asyncIterator('sessionCreated')
      },
      sessionUpdated: {
        type: GraphQLString,
        resolve: payload => payload.sessionUpdated.ID,
        subscribe: () => pubsub.asyncIterator('sessionUpdated')
      },
      sessionDeleted: {
        type: GraphQLString,
        resolve: payload => payload.sessionDeleted.ID,
        subscribe: () => pubsub.asyncIterator('sessionDeleted')
      },

      userCreated: {
        type: GraphQLString,
        resolve: payload => payload.userCreated.EMAIL,
        subscribe: () => pubsub.asyncIterator('userCreated')
      },
      userUpdated: {
        type: GraphQLString,
        resolve: payload => payload.userUpdated.EMAIL,
        subscribe: () => pubsub.asyncIterator('userUpdated')
      },
      userDeleted: {
        type: GraphQLString,
        resolve: payload => payload.userDeleted.EMAIL,
        subscribe: () => pubsub.asyncIterator('userDeleted')
      }
    })
});

export default subscription;