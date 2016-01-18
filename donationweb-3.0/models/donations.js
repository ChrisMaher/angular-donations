var donations = [
    {id: 1000000, paymenttype: 'PayPal', amount: 1600, upvotes: 1},
    {id: 1000001, paymenttype: 'Direct', amount: 1100, upvotes: 2}
];

var donations = require('../models/donations');
var express = require('express');
var router = express.Router();

router.findAll = function(req, res) {
    // Return a JSON representation of our list
    res.json(donations);
}

router.home = function(req, res) {
    //route to handle all angular requests
    res.sendFile('../public/index.ejs'); // load our public/index.ejs file
}

module.exports = donations;