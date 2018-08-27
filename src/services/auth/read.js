import { documentClient } from '../initDynamo';

const getAuthSession = (EMAIL, AUTH_ID) => {
    const params = {
        TableName: 'AUTH',
        Key: { 
            EMAIL: EMAIL,
            AUTH_ID: AUTH_ID
        }
    };

    return new Promise(resolve => {
        documentClient.get(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success item retrieved: ", data.Item);
                resolve([data.Item]);
            }
        });
    });
};

export default getAuthSession;