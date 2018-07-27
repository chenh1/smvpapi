import { documentClient } from '../initDynamo';
import { uuidv4 } from 'uuid';

const createSession = () => {
    const params = {
        TableName: 'SESSIONS',
        Item: {
          'ID' : uuidv4(),
          'IS_PLAYING': false,
          'IS_RECORDING': false,
          'TEMPO': 120
        }
    };
      
    // Call documentClient to add the item to the table
    documentClient.put(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
};

export default createSession;