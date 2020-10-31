const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/personalbudget";
var routes = require("./routes/budgetRoutes");
var Budget = require('./model/budgetModel');

app.use(cors());
mongoose
  .connect(
    url,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    app
      .listen(port, () => {
        console.log(`API listening at http://localhost:${port}`);
      })
      .catch((connectionErr) => {
        console.log(connectionErr);
        mongoose.connection.close();
      });
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
}); 
 



