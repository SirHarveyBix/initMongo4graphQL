const mongoose = require('mongoose');
// https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype
const URI =
  'mongodb+srv://gui:2238@cluster.wyrhp.mongodb.net/marketplace?retryWrites=true&w=majority';

const MongoDBClient = {
  init: () => {
    try {
      const client = mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      client.then(() => {
        console.log(' Connected to 🌱');
      });
    } catch (error) {
      throw Error(error);
    }
  },
};

module.exports = MongoDBClient;
