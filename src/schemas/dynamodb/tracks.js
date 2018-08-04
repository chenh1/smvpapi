/**
 * Attributes
 * ID (N): Primary id
 * TRACK_URL (S): Url to s3 bucket
 * SESSION_ID (N): Id for the session the track belongs to
 */
const trackTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'SESSION_ID',
            AttributeType: 'S'
        },
        {
            AttributeName: 'ID',
            AttributeType: 'S'
        }
    ],
    KeySchema: [
        {
            AttributeName: 'SESSION_ID',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'ID',
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