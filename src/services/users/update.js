import sha256 from 'sha256';
import { documentClient } from '../initDynamo';

// existingSessions is an array of sessions that belongs to the user
// Updating the user's session ids list should happen only if you already have the user's session list on hand
const updateUser = (EMAIL, SESSION_ID, PASSWORD) => {
    const expressionAttributeNames = {};
    const expressionAttributeValues = {};
    let updateExpression = `set ${PASSWORD ? '#P = :p,' : ''}${SESSION_ID ? '#S = list_append(#S, :s),' : ''}`;
    updateExpression = updateExpression.substr(0, updateExpression.length - 1);

    if (PASSWORD) {
        expressionAttributeNames['#P'] = 'PASSWORD';
        expressionAttributeValues[':p'] = sha256(PASSWORD);
    }

    if (SESSION_ID) {
        expressionAttributeNames['#S'] = 'SESSION_IDS';
        expressionAttributeValues[':s'] = SESSION_ID;
    }

    const params = {
        TableName: 'USERS',
        Key: { EMAIL: EMAIL },
        UpdateExpression: updateExpression,
        ExpressionAttributeNames: expressionAttributeNames, 
        ExpressionAttributeValues: expressionAttributeValues
    };

    return new Promise(resolve => {
        documentClient.update(params, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                resolve([data.Item]);
            }
        });
    });
};

export default updateUser;