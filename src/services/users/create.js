import sha256 from 'sha256';
import { documentClient } from '../initDynamo';

const createUser = (EMAIL, PASSWORD) => {
    const params = {
        TableName: 'USERS',
        Item: {
            'EMAIL': EMAIL,
            'PASSWORD': sha256(PASSWORD),
            'SESSION_IDS': []  
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

export default createUser;