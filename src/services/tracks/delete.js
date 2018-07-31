import { documentClient } from '../initDynamo';

const deleteTrack = (SESSION_ID, ID) => {
    const params = {
        TableName: 'TRACKS',
        Key: {
            ID: ID,
            SESSION_ID: SESSION_ID
        }
    };

    return new Promise(resolve => {
        documentClient.delete(params, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                resolve([data.Item]);
            }
        });
    });
};

export default deleteTrack;