import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import bodyParser from 'body-parser';
import { schema } from './schemas';

import { createTrack, getTrack, updateTrack } from './services/tracks';
import { createTable, listTables } from './services/tables';
import { trackTable } from './schemas/dynamodb/tracks';

const app = express();

app.use(cors());
app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = createServer(app);

app.post('/graphql', graphqlHTTP(
  (req, res) => {
    return {
      schema: schema, 
      graphiql: true,
      rootValue: req,
      context: req
    }
  }
));

app.get('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

server.listen(app.get('port'), () => {
  new SubscriptionServer({schema, execute, subscribe}, {server, path: '/subscriptions'});
  console.log("Running on localhost:" + app.get('port')); 
});

//createTable(trackTable);
//createTrack();
//updateTrack(1, 1, 's3.newUrl')
getTrack(1, 1);
//listTables();
