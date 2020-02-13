var express = require("express");
var app = express();

// routes
app.get("/", function(request, response) {
  response.send("Hello, World!");
});

// get request route
app.get("/comments", function(request, response) {
    console.log('GET request received at /comments');
  });

  // post request route
app.post("/comments", function(request, response) {
    console.log('POST request received at /comments');
  });

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
