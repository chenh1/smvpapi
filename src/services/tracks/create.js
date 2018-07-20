import { documentClient } from '../initDynamo';

const createTrack = () => {
    const params = {
        TableName: 'TRACKS',
        Item: {
          'ID' : 2,
          'SESSION_ID' : 1,
          'URL': 's3.somethingAgain'
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

export default createTrack;