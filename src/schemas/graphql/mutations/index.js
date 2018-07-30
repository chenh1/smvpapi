import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';
import { pubsub } from '../../index';
import { createTrack, updateTrack, deleteTrack } from '../../../services/tracks';
import { TrackType, SessionType, UserType } from '../types';

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createTrack: {
            type: TrackType,
            args: {
                SESSION_ID: { type: GraphQLInt },
            },
            resolve: (rootValue, args) => (createTrack(args.SESSION_ID).then(
                res => pubsub.publish('trackCreated', {trackCreated: res})
            ))
        },
        updateTrack: {
            type: TrackType,
            args: {
                SESSION_ID: { type: GraphQLInt },
                ID: { type: GraphQLInt },
                URL: { type: GraphQLString }
            },
            resolve: (rootValue, args) => (updateTrack(args.SESSION_ID, args.ID, args.URL).then(
                res => pubsub.publish('trackUpdated', {trackUpdated: res})
            ))
        },
        deleteTrack: {
            type: TrackType,
            args: {
                SESSION_ID: { type: GraphQLInt },
                ID: { type: GraphQLInt },
            },
            resolve: (rootValue, args) => (deleteTrack(args.SESSION_ID, args.ID).then(
                res => pubsub.publish('trackDeleted', {trackDeleted: res})
            ))
        },
        //CUD for sessions
        //CUD for users
    })
});