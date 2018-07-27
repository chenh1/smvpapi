/**
 * Attributes
 * EMAIL (S): Primary verification
 * SESSION_IDS (NS): a number set (array) of sessions tied to the user
 * PASSWORD (S): sha encrypted password
 */

const userTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'EMAIL',
            AttributeType: 'S'
        }
    ],
    KeySchema: [
        {
            AttributeName: 'EMAIL',
            KeyType: 'HASH'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'USERS',
    StreamSpecification: {
        StreamEnabled: false
    }  
};

export { userTable };