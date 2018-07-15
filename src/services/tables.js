import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB();

const createTable = (params) => {
    dynamodb.createTable(params, (err, data) =>  {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
};

export { createTable }