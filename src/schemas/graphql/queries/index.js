import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';

const query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        sessionid: {
          type: GraphQLInt,
          resolve: () => (queryData('id', 'sessions'))
        },
    })
});

export default query;