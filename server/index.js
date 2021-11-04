const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors');

const { PORT, DB_CONFIG } = require('./config');
const schema = require('./src/schemas/graphql.schema');

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`server is running on ${ PORT }`);
});

mongoose
  .connect(DB_CONFIG.url, DB_CONFIG.options)
  .then(() => {
    console.log('DB is connected');
  })
  .catch((err) => {
    console.log('Failed to connect to DB');

    throw err
  });
