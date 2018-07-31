import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';

const SessionType = new GraphQLObjectType({
    name: 'Session',
    fields: {
        ID: { type: GraphQLString },
        IS_PLAYING: { type: GraphQLBoolean },
        IS_RECORDING: { type: GraphQLBoolean },
        TEMPO: { type: GraphQLInt }
    }
});

export default SessionType;