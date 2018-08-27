import { dynamodb } from './initDynamo';

const createTable = (params) => {
    dynamodb.createTable(params, (err, data) =>  {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
};

const listTables = () => {
    dynamodb.listTables({}, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    }); 
};

const deleteTable = (params) => {
    dynamodb.deleteTable(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
};

const updateTimeToLive = (params) => {
    dynamodb.updateTimeToLive(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    })
};

const describeTimeToLive = (params) => {
    dynamodb.describeTimeToLive(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    })
};

export { createTable, listTables, deleteTable, updateTimeToLive, describeTimeToLive };