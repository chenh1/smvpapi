import { uuidv4 } from 'uuid';
import { documentClient } from '../initDynamo';

const createTrack = (SESSION_ID) => {
    const trackId = uuidv4();

    const params = {
        TableName: 'TRACKS',
        Item: {
          'ID' : trackId,
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
                console.log('track id: ', trackId);
                resolve([data.Item]);
            }
        });
    });
};

export default createTrack;