/**
 * Attributes
 * ID (N): Primary id
 * IS_PLAYING (BOOL): whether or not session is in play
 * IS_RECORDING (BOOL): whether or not session is in play
 * TEMPO (N): the beats per measure of each loop
 */

const authTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'EMAIL',
            AttributeType: 'S'
        },
        {
            AttributeName: 'AUTH_ID',
            AttributeType: 'S'
        }
    ],
    KeySchema: [
        {
            AttributeName: 'EMAIL',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'AUTH_ID',
            KeyType: 'RANGE'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'AUTH',
    StreamSpecification: {
        StreamEnabled: false
    }
};

const authTableUpdateTTL = {
        TableName: 'AUTH',
        TimeToLiveSpecification: {
            AttributeName: 'TTL',
            Enabled: true
        }
  }

export { authTable, authTableUpdateTTL };