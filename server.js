// modules
var express = require("express");
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('database/comments.db');
var bodyParser = require("body-parser");

// code that will help server run locally or from cloud
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get("/", function (request, response) {
  response.send("Hello, World!");
});

// get request route
app.get("/comments", function (request, response) {
  console.log('GET request received at /comments');

  // getting all rows from databse
  db.all('SELECT * FROM comments', function (err, rows) {
    if (err) {
      console.log("Error: " + err);
    }
    else {
      response.send(rows);
    }
  })
});

// post request route
app.post("/comments", function (request, response) {
  console.log('POST request received at /comments');
  db.run('INSERT INTO comments VALUES (?,?)', [request.body.name, request.body.comment], function (err) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
      response.status(200).redirect('index.html');
    }
  });
});

app.listen(port, function () {
  console.log("server is running on port 3000");
});
