//open the server (basic setting for opening the server)
const express = require("express");
const app = express();
//8080 is the port number of the server and run the code inside the function
//localhost:8080
app.listen(8080, function(){
    console.log("listening on 8080");
});

//if the user visits /game website, run the code inside the function. This "/game" can be modified 
app.get('/gam', function(req, res){
    res.send("This is main page of the card game");
});

// "/" one slash is for home page
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});


//creating database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8080/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });