# Server app for sampler demo

### What does this do?

This application runs with a websocket connection to publish/subscribe to components in its client-side companion.

### How does it do it?

The architecture is twofold; the idea is to spin up a server which updates content to users with sessions subscribed to it and to handle the data with dynamoDB behind it. Depending on traffic, multiple clients can subcribe to a single server, with the number of servers scalable in the event of excessive load.

This server runs with a graphql interface and the client facing application is hooked up to it. Graphql schemas are mapped to dynamoDb.

### Development Setup

1. Install dynamodb locally: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html
2. run `npm install`

### Initialization 

1. `cd dynamodb_local_latest` (or wherever you saved your dynamoDb to)
2. run `java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
3. npm start

### Notes:
- db port: 8000
- graphql server port: 4000

### Things to consider:
- serverless
- appsync