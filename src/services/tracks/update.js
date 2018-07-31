import { documentClient } from '../initDynamo';

const updateTrack = (SESSION_ID, ID, URL) => {
    const params = {
        TableName: 'TRACKS',
        Key: {
            ID: ID,
            SESSION_ID: SESSION_ID
        },
        UpdateExpression: 'set #U = :u',
        ExpressionAttributeNames: {
            '#U': 'URL'
        }, 
        ExpressionAttributeValues: {
            ':u': URL
        }
    };

    return new Promise(resolve => {
        documentClient.update(params, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                resolve([data.Item]);
            }
        });
    });
};

export default updateTrack;