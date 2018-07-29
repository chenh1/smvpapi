import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';
import { getTrack } from '../../../services/tracks';
import { getSession, getSessions } from '../../../services/sessions';

const TrackType = new GraphQLObjectType({
    name: 'Track',
    fields: {
        ID: { type: GraphQLInt },
        SESSION_ID: { type: GraphQLInt },
        URL: { type: GraphQLString }
    }
});

const SessionType = new GraphQLObjectType({
    name: 'Session',
    fields: {
        ID: { type: GraphQLString },
        IS_PLAYING: { type: GraphQLBoolean },
        IS_RECORDING: { type: GraphQLBoolean },
        TEMPO: { type: GraphQLInt }
    }
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        EMAIL: { type: GraphQLString },
        PASSWORD: { type: GraphQLString }
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
        session: {
            type: new GraphQLList(SessionType),
            args: {
                ID: { type: GraphQLString },
                IDS: { type: GraphQLList(GraphQLString) } 
            },
            resolve: (rootValue, args) => args.IDS.length ?
                getSessions(args.IDS.map(id => ({ID: id}))).then(res => res)
                : getSession(args.ID).then(res => res)
        },
        user: {
            type: new GraphQLList(UserType),
            args: {
                SESSION_ID: { type: GraphQLInt },
                ID: { type: GraphQLInt }
            },
            resolve: (rootValue, args) => (getTrack(args.ID, args.SESSION_ID).then(res=>res))
        }
    })
});

export default query;