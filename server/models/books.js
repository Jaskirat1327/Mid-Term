/*
File Name: books.js
Student Name: Jaskirat SIngh
Student ID: 301274619
Date: July 06, 2023
*/


 let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
