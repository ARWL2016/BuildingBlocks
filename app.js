var express = require('express');
var app = express(); 

app.get('/', function(request, response) {
    response.send("Hello");
});

app.get('/cities', function (request, response) {
     response.json("Hello");
});


module.exports = app; 
 