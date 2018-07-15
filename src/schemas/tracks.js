const trackTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'ID',
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

export { trackTable };