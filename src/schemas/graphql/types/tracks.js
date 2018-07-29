import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';

const TrackType = new GraphQLObjectType({
    name: 'Track',
    fields: {
        ID: { type: GraphQLInt },
        SESSION_ID: { type: GraphQLInt },
        URL: { type: GraphQLString }
    }
});

export default TrackType;