import { documentClient } from '../initDynamo';

const deleteTrack = (SESSION_ID, ID) => {
    const params = {
        TableName: 'TRACKS',
        Key: {
            ID: ID,
            SESSION_ID: SESSION_ID
        }
    };

    documentClient.delete(params, function(err, data) {
        if (err) console.log(err);
        else console.log(data);
    });
};

export default deleteTrack;