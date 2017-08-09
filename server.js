// Importing libraries
var express = require("express");
var restful = require("restful");
var mongoose = restful.mongoose;

// building express server
var app = express();{
  app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
  });
