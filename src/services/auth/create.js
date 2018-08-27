import { documentClient } from '../initDynamo';

const createAuthSession = (EMAIL) => {
    const params = {
        TableName: 'AUTH',
        Item: {
            'EMAIL': EMAIL,
            'AUTH_ID': 'key10', // ENCRYPT THIS KEY
            'TTL': Math.floor(Date.now() / 1000) + 600 // expire 10 minutes later
        }
    };
      
    // Call documentClient to add the item to the table
    return new Promise(resolve => {
        documentClient.put(params, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                resolve([data.Item]);
            }
        });
    });
};

export default createAuthSession;