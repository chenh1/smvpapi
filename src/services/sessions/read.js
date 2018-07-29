import { documentClient } from '../initDynamo';

const getSession = (ID) => {
    const params = {
        TableName: 'SESSIONS',
        Key: {
            ID: ID
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

// IDS is an array of objects: [{ID: xxx}, {ID: xxy}, ...];
const getSessions = (IDS) => {
    const params = {
        RequestItems: {
            'SESSIONS': {
                Keys: IDS
            }
        }
    };

    return new Promise(resolve => {
        documentClient.batchGet(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success item retrieved: ", data.Responses.SESSIONS);
                resolve(data.Responses.SESSIONS)
            }
        });
    })
};

export { getSession, getSessions };