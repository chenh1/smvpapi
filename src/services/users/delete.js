import { documentClient } from '../initDynamo';
import { getUser } from './';

const deleteUser = (EMAIL, PASSWORD) => {
    const params = {
        TableName: 'USERS',
        Key: {
            EMAIL: EMAIL
        }
    };

    return new Promise(resolve => {
        getUser(EMAIL, PASSWORD).then(res => {
            if (res[0].EMAIL) {
                documentClient.delete(params, function(err, data) {
                    if (err) {
                        console.log('err!!');
                        console.log(err);
                    } else {
                        console.log('success')
                        console.log(data);
                        resolve([data.Item])
                    }
                });
            } else {
                console.log(res);
            }
        });
    })    
};

export default deleteUser;