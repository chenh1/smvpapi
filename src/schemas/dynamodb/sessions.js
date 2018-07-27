/**
 * Attributes
 * ID (N): Primary id
 * IS_PLAYING (BOOL): whether or not session is in play
 * IS_RECORDING (BOOL): whether or not session is in play
 * TEMPO (N): the beats per measure of each loop
 */

const sessionTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'ID',
            AttributeType: 'S'
        }
    ],
    KeySchema: [
        {
            AttributeName: 'ID',
            KeyType: 'HASH'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'SESSIONS',
    StreamSpecification: {
        StreamEnabled: false
    }  
};

export { sessionTable };