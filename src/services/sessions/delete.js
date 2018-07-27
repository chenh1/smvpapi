import { documentClient } from '../initDynamo';

const deleteSession = (ID) => {
    const params = {
        TableName: 'SESSIONS',
        Key: { ID: ID }
    };

    documentClient.delete(params, function(err, data) {
        if (err) console.log(err);
        else console.log(data);
    });
};

export default deleteSession;