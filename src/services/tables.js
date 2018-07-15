import AWS from 'aws-sdk';

AWS.config.update({
    region: "us-west-2",
    endpoint: 'http://localhost:8000',
    // accessKeyId default can be used while using the downloadable version of DynamoDB. 
    // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
    accessKeyId: "fakeMyKeyId",
    // secretAccessKey default can be used while using the downloadable version of DynamoDB. 
    // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
    secretAccessKey: "fakeSecretAccessKey"
});

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

const createTrack = () => {
    var params = {
        TableName: 'TRACKS',
        Item: {
          'ID' : {N: '00002'},
          'TRACK_URL' : {S: 's3.somestuff3'},
        }
    };
      
    // Call DynamoDB to add the item to the table
    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
}

const getTrack = () => {
    var params = {
        TableName: 'TRACKS',
        Key: {
          'ID' : {N: '00002'},
          'TRACK_URL' : {S: 's3.somestuff3'},
        }
    };
      
    // Call DynamoDB to read the item from the table
    dynamodb.getItem(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success item retrieved: ", data.Item);
        }
    });
}

const listTables = () => {
    dynamodb.listTables({}, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    }); 
}

export { createTable, createTrack, getTrack, listTables };