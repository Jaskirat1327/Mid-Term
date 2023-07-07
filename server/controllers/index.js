/*
File Name: index.js
Student Name: Jaskirat SIngh
Student ID: 301274619
Date: July 06, 2023
*/

let express = require('express');
let mongoose = require('mongoose');

// public controller function to display the homepage
module.exports.displayHomePage = function (req, res, next){
    res.render('content/index', {
        title: 'Home',
        books: ''
    });
}

