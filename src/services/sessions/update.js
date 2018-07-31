import { documentClient } from '../initDynamo';

const updateSession = (IS_PLAYING, IS_RECORDING, TEMPO) => {
    const expressionAttributeNames = {};
    const expressionAttributeValues = {};
    let updateExpression = `set ${IS_PLAYING ? '#P = :p,' : ''}${IS_RECORDING ? '#R = :r,' : ''}${TEMPO ? '#T = :t,' : ''}`;
    updateExpression.substr(0, updateExpression.length - 1);

    if (IS_PLAYING) {
        expressionAttributeNames['#P'] = 'IS_PLAYING';
        expressionAttributeValues[':p'] = IS_PLAYING; 
    }

    if (IS_RECORDING) {
        expressionAttributeNames['#R'] = 'IS_RECORDING';
        expressionAttributeValues[':r'] = IS_RECORDING; 
    }

    if (TEMPO) {
        expressionAttributeNames['#T'] = 'TEMPO';
        expressionAttributeValues[':t'] = TEMPO; 
    }

    const params = {
        TableName: 'SESSIONS',
        Key: { ID: ID },
        UpdateExpression: updateExpression,
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues
    };

    documentClient.update(params, function(err, data) {
        if (err) console.log(err);
        else console.log(data);
    });
};

export default updateSession;