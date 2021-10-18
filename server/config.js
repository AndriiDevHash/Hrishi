const PORT = 9000;

const DB_CONFIG = {
  // URI to the MongoDB
  url: '',
  options: {
    useNewUrlParser: true, useUnifiedTopology: true
  }
}

module.exports = {
  PORT,
  DB_CONFIG
};
