// Importing libraries
var express = require('express');
    restful = require('node-restful');
    mongoose = restful.mongoose;

// building express server
var app = express();
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
  });
// Connecting to mongoDb
mongoose.connect('mongodb://localhost/restful');

var StudentSchema = mongoose.Schema({
  name: String,
  class: String,
  age: Number
});
 var Students = restful.model('students', StudentSchema);
 Students.methods(['get', 'put', 'post', 'delete']);
 Students.register(app, '/api/students');
 
 app.listen(3000);
 console.log('Server is running correctly');
