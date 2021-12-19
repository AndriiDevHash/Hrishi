const { parseFile } = require('fast-csv');
const fs = require('fs');
const mongoose = require('mongoose');
const CompanyModel = require('./model');

const FOLDER = './files/Split/';

// please set yourl URL to connect to the DB;
const URL = "";
let jobsInProgress = 0;

function parseFolder() {
  fs.readdir(FOLDER, (err, files) => {
    if(err) {
      throw err;
    }

    jobsInProgress = files.length;

    files.forEach((file) => {
      const filePath = FOLDER + file;
      let promises = [];

      parseFile(filePath, { headers: true })
        .on('error', error => console.error(error))
        .on('data', (row) => {
          const company = new CompanyModel(row);
          const companyPromise = company.save();

          promises.push(companyPromise);
        })
        .on('end', () => {
          checkDropConnection(promises, filePath)
        });
    });
  });
}

function checkDropConnection(promises, filePath) {
  Promise.allSettled(promises)
    .then(() => {
      console.log(`file: ${ filePath } complited`);

      jobsInProgress = jobsInProgress - 1;

      if(!jobsInProgress) {
        mongoose.connection.close();
      }
    });
}

function connectMongoDB() {
  return mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => Promise.resolve(true))
    .catch((err) => {
      console.log(err);
    });
}

connectMongoDB()
  .then(() => parseFolder())
  .catch((err) => {
    console.log(err);
  });
