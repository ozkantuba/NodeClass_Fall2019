
// first include express node module
var express = require('express');

// define express function as a variable called app
var app = express();

//you should listen port 3000 - this is important if there is a specified port finds it otherwise uses port 3000
var server = app.listen(process.env.PORT || 3000);

//a function that - a simplified version of saying when someone goes to the port serve the folder 'public'
//your public folder will include your html/css/ and js files 
//if we use static we dont use http library
app.use(express.static('public'))
console.log('server running');






