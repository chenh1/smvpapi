import sha256 from 'sha256';
import { documentClient } from '../initDynamo';

const updateUser = (EMAIL, PASSWORD) => {
    const params = {
        TableName: 'USERS',
        Key: {
            EMAIL: EMAIL
        },
        UpdateExpression: 'set #P = :p',
        ExpressionAttributeNames: {
            '#P': 'PASSWORD'
        }, 
        ExpressionAttributeValues: {
            ':p': sha256(PASSWORD)
        }
    };

    documentClient.update(params, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            resolve([data.Item])
        }
    });
};

export default updateUser;