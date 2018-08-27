import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';
import { pubsub } from '../../index';
import { createAuthSession } from '../../../services/auth';
import { createTrack, updateTrack, deleteTrack } from '../../../services/tracks';
import { createSession, updateSession, deleteSession } from '../../../services/sessions';
import { createUser, updateUser, deleteUser } from '../../../services/users';
import { TrackType, SessionType, UserType, AuthType } from '../types';

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createAuthSession: {
            type: AuthType,
            args: {
                EMAIL: { type: GraphQLString }
            },
            resolve: (rootValue, args) => (createAuthSession(args.EMAIL).then(
                res => {
                    console.log(res);
                    return res
                }
            ))
        },
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
        createSession: {
            type: SessionType,
            args: {
                userEmail: { type: GraphQLString },
            },
            resolve: (rootValue, args) => (createSession(args.userEmail).then(
                res => pubsub.publish('sessionCreated', {sessionCreated: res})
            ))
        },
        updateSession: {
            type: SessionType,
            args: {
                IS_PLAYING: { type: GraphQLBoolean },
                IS_RECORDING: { type: GraphQLBoolean },
                TEMPO: { type: GraphQLInt }
            },
            resolve: (rootValue, args) => (updateSession(args.IS_PLAYING, args.IS_RECORDING, args.TEMPO).then(
                res => pubsub.publish('sessionUpdated', {sessionUpdated: res})
            ))
        },
        deleteSession: {
            type: SessionType,
            args: {
                ID: { type: GraphQLInt },
                userEmail: { type: GraphQLString },
                existingSessions: { type: GraphQLList(GraphQLString) }
            },
            resolve: (rootValue, args) => (deleteSession(args.ID, args.userEmail, args.existingSessions).then(
                res => pubsub.publish('sessionDeleted', {sessionDeleted: res})
            ))
        },

        //CUD for users
        createUser: {
            type: UserType,
            args: {
                EMAIL: { type: GraphQLString },
                PASSWORD: { type: GraphQLString }
            },
            resolve: (rootValue, args) => (createUser(args.EMAIL, args.PASSWORD).then(
                res => pubsub.publish('userCreated', {userCreated: res})
            ))
        },
        updateUser: {
            type: UserType,
            args: {
                EMAIL: { type: GraphQLString },
                SESSION_IDS: { type: GraphQLList(GraphQLString) },
                PASSWORD: { type: GraphQLString }
            },
            resolve: (rootValue, args) => (updateUser(args.EMAIL, args.SESSION_IDS, args.PASSWORD).then(
                res => pubsub.publish('userUpdated', {userUpdated: res})
            ))
        },
        deleteUser: {
            type: UserType,
            args: {
                EMAIL: { type: GraphQLString },
                PASSWORD: { type: GraphQLString }
            },
            resolve: (rootValue, args) => (deleteUser(args.EMAIL, args.PASSWORD).then(
                res => pubsub.publish('userDeleted', {userDeleted: res})
            ))
        }
    })
});

export default mutation;