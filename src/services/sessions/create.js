import { documentClient } from '../initDynamo';
import { updateUser } from '../users';
import uuidv4 from 'uuid/v4';

const createSession = (userEmail) => {
    const sessionId = uuidv4();

    const params = {
        TableName: 'SESSIONS',
        Item: {
          'ID' : sessionId,
          'IS_PLAYING': false,
          'IS_RECORDING': false,
          'TEMPO': 120
        }
    };
    // Call documentClient to add the item to the table
    return new Promise(resolve => {
        documentClient.put(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data.Item);
                console.log('session id: ', sessionId);
                updateUser(userEmail, [sessionId]);
                resolve([data.Item])
            }
        });
    });
};

export default createSession;