import { documentClient } from '../initDynamo';
import { updateUser } from '../users';

const deleteSession = (ID, userEmail, existingSessions = []) => {
    const indexOfId = existingSessions.indexOf(ID);

    const params = {
        TableName: 'SESSIONS',
        Key: { ID: ID }
    };

    documentClient.delete(params, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data);
            updateUser(userEmail, [
                ...existingSessions.slice(0, indexOfId),
                ...existingSessions.slice(indexOfId + 1, existingSessions.length)
            ])
        }
    });
};

export default deleteSession;