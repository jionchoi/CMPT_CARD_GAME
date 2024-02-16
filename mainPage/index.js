//open the server (basic setting for opening the server)
const express = require("express");
const app = express();
//cors error is when other html files access to the server or request anything from the server, it cors blocks them. 
var cors = require('cors');

//we can chage the condition of cors. (deny access from certain ways)
app.use(cors());


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

// ?q=jion&name=jion&age=18 => {q = "jion", name = "jion", age = 18}
app.get('/user/:userId', function(req, res){
    const {userId} = req.params;
    if(userId == "jion"){
        res.json({"username": userId});
    }
    else{
        res.json({"username": "Access Denied"});
    }
});


// //creating database
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:8080/mydb";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });

function logIn(){
    const username = document.getElementById("username").value;
    
    fetch(`http://localhost:8080/user/${username}`)
    .then((response) => response.json())
    .then((data) =>{
        document.getElementById("main").innerHTML = data;
    });
   }

