import { uuidv4 } from 'uuid';
import { documentClient } from '../initDynamo';

const createTrack = (SESSION_ID) => {
    const params = {
        TableName: 'TRACKS',
        Item: {
          'ID' : uuidv4(),
          'SESSION_ID' : SESSION_ID,
          'URL': 's3.somethingAgain'
        }
    };
      
    // Call documentClient to add the item to the table
    return new Promise(resolve => {
        documentClient.put(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data);
                resolve([data.Item]);
            }
        });
    });
};

export default createTrack;