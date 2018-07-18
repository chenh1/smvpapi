import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';
import { getTrack } from '../../../services/tracks';

const TrackType = new GraphQLObjectType({
    name: 'Track',
    fields: {
        ID: { type: GraphQLInt },
        SESSION_ID: { type: GraphQLInt },
        URL: { type: GraphQLString }
    }
});

const query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        track: {
            type: new GraphQLList(TrackType),
            args: {
                SESSION_ID: { type: GraphQLInt },
                ID: { type: GraphQLInt }
            },
            resolve: (rootValue, args) => (getTrack(args.ID, args.SESSION_ID).then(res=>res))
        },
    })
});

export default query;