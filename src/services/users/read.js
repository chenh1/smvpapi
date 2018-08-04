import sha256 from 'sha256';
import { documentClient } from '../initDynamo';

const getUser = (EMAIL, PASSWORD) => {
    const params = {
        TableName: 'USERS',
        Key: {
            EMAIL: EMAIL
        }
    };

    return new Promise(resolve => {
        documentClient.get(params, function(err, data) {
            if (err) {
                console.log("Error", err);
                resolve(err);
            } else {
                console.log("Success item retrieved: ", data.Item);
                if (data.Item && sha256(PASSWORD) === data.Item.PASSWORD) {
                    resolve([data.Item])    
                } else {
                    resolve('password is incorrect')
                }
            }
        });
    })
};

const getUsers = (EMAIL) => {
    const params = {
        RequestItems: {
            'USERS': {
                Keys: EMAIL
            }
        }
    };

    return new Promise(resolve => {
        documentClient.batchGet(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success item retrieved: ", data.Responses.SESSIONS);
                resolve(data.Responses.USERS)
            }
        });
    })
};

export { getUser, getUsers };