const csv = require('csvtojson');
const path = require('path');
const mongoose = require('mongoose');

const Record = require('./model');

const csvFilePath = path.join(__dirname, process.env.FILE_PATH);

// please set yourl URL to connect to the DB;
const uri = "";

function storeData() {
  csv()
    .fromFile(csvFilePath)
    .then((data) => {
        const promises = data.map((record) => {
          const recordModel = new Record(record);

          return recordModel.save();
        });

        Promise.allSettled(promises)
          .then(() => mongoose.connection.close())
    })
}

function connectMongoDB() {
  return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => Promise.resolve(true))
    .catch((err) => {
      throw err
    });
}

connectMongoDB()
  .then(() => storeData());



