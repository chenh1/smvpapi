import { documentClient } from '../initDynamo';
import rand from 'csprng';

const createAuthSession = (EMAIL) => {
    const authId = rand(160, 36);

    const params = {
        TableName: 'AUTH',
        Item: {
            'EMAIL': EMAIL,
            'AUTH_ID': authId, // ENCRYPT THIS KEY
            'TTL': Math.floor(Date.now() / 1000) + 600 // expire 10 minutes later
        }
    };
      
    // Call documentClient to add the item to the table
    return new Promise(resolve => {
        documentClient.put(params, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(authId);
                resolve(authId);
            }
        });
    });
};

export default createAuthSession;