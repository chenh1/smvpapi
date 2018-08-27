import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';

const AuthType = new GraphQLObjectType({
    name: 'Auth',
    fields: {
        AUTH_ID: { type: GraphQLString }
    }
});

export default AuthType;