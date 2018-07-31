import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        EMAIL: { type: GraphQLString },
        PASSWORD: { type: GraphQLString },
        SESSION_IDS: { type: GraphQLList(GraphQLString) }
    }
});

export default UserType;