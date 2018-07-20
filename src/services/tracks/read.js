import { documentClient } from '../initDynamo';

const getTrack = (ID, SESSION_ID) => ID ? getSingle(ID, SESSION_ID) : getBatch(SESSION_ID);

const getSingle = (ID, SESSION_ID) => {
    const params = {
        TableName: 'TRACKS',
        Key: {
            ID: ID,
            SESSION_ID: SESSION_ID
        }
    };

    return new Promise(resolve => {
        documentClient.get(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success item retrieved: ", data.Item);
                resolve([data.Item])
            }
        });
    })
};

const getBatch = (SESSION_ID) => {
    const params = {
        TableName: 'TRACKS',
        KeyConditionExpression: 'SESSION_ID = :sid',
        ExpressionAttributeValues: { ":sid": SESSION_ID }
    };

    return new Promise(resolve => {
        documentClient.query(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success item retrieved: ", data.Items);
                resolve(data.Items)
            }
        });
    })
};

export default getTrack;