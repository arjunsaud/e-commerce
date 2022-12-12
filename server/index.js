const app = require("./src/config/express");
const {MongoConnection} = require("./src/config/dbconnection");
const { PORT } = require("./src/config/variables");

(async () => {
  app.listen(PORT, () => {
    console.log("Server Listening at PORT ", PORT);
  });
  try {
    const connection = new MongoConnection();
     await connection.connectToDb();
    console.log("Database Connected");
  } catch (err) {
    console.log("Error Occured While Connecting");
    console.log(err);
  }
})();
