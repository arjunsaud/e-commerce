const mongoose = require("mongoose");
const { MONGO_URL } = require("./variables");

mongoose.set('strictQuery',false)
class Connection {
  connectToDb() {
    throw new Error("Cannot implement this method on parent Class");
  }
}

class MongoConnection extends Connection {
  connectToDb() {
    return new Promise((resolve, reject) => {
      mongoose.connect(MONGO_URL, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
}

module.exports = {MongoConnection};
