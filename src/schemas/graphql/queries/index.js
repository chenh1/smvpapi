import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';
import { getTrack } from '../../../services/tracks';
import { getSession, getSessions } from '../../../services/sessions';
import { getUser } from '../../../services/users';
import { TrackType, SessionType, UserType } from '../types';

const query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        track: {
            type: new GraphQLList(TrackType),
            args: {
                SESSION_ID: { type: GraphQLString },
                ID: { type: GraphQLString }
            },
            resolve: (rootValue, args) => (getTrack(args.ID, args.SESSION_ID).then(res=>res))
        },
        session: {
            type: new GraphQLList(SessionType),
            args: {
                ID: { type: GraphQLString },
                IDS: { type: GraphQLList(GraphQLString) } 
            },
            resolve: (rootValue, args) => args.IDS && args.IDS.length ?
                getSessions(args.IDS.map(id => ({ID: id}))).then(res => res)
                : getSession(args.ID).then(res => res)
        },
        user: {
            type: new GraphQLList(UserType),
            args: {
                EMAIL: { type: GraphQLString },
                PASSWORD: { type: GraphQLString }
            },
            resolve: (rootValue, args) => args.PASSWORD ? 
                getUser(args.EMAIL, args.PASSWORD).then(res=>res)
                : 'password required to retrieve data'
        }
    })
});

export default query;