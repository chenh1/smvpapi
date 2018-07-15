const trackTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'ID',
            AttributeType: 'N'
        },
        {
            AttributeName: 'SESSION_ID',
            AttributeType: 'N'
        },
        {
            AttributeName: 'TRACK_URL',
            AttributeType: 'S'
        }
    ],
    KeySchema: [
        {
            AttributeName: 'ID',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'SESSION_ID',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'TRACK_URL',
            KeyType: 'RANGE'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'TRACKS',
    StreamSpecification: {
        StreamEnabled: false
    }   
};

const createTrack = () => {
    var params = {
        TableName: 'TABLE',
        Item: {
          'CUSTOMER_ID' : {N: '001'},
          'CUSTOMER_NAME' : {S: 'Richard Roe'},
        }
    };
      
    // Call DynamoDB to add the item to the table
    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
}

export { trackTable };