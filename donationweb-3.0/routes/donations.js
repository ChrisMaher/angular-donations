var Donation = require('../models/donations');

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose'); 
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/donationsdb');

router.findById = function(req, res) {

    var id = req.params.id;
    
    console.log('Getting Donation for Id: ' + id);
    
    Donation.findById(id, function(err,donation) {
        if (err)
            res.send(err);

            res.send(donation);
        });
}
 
router.home = function(req, res) {
  //route to handle all angular requests
  res.sendFile('../public/index.ejs'); // load our public/index.ejs file
}

router.findAll = function(req, res) {
  // Use the Donation model to find all donations
  Donation.find(function(err, donations) {
    if (err)
      res.send(err);

    res.json(donations);
  });
}

router.addDonation = function(req, res) {

    var donation = new Donation();
    
    donation.paymenttype = req.body.paymenttype;
    donation.amount = req.body.amount;

    console.log('Adding donation: ' + JSON.stringify(donation));
    
    // Save the donation and check for errors
  donation.save(function(err) {
    if (err)
      res.send(err);

      res.json({ message: 'Donation Added!', data: donation });
  });
}
 
router.deleteDonation = function(req, res) {

    var donation = new Donation();

    var id = req.params.id;
    console.log('Deleting donation: ' + id);
    
    Donation.findByIdAndRemove(id, function(err) {
        if (err)
            res.send(err);

        router.findAll(req,res);
  });
}

router.incrementUpvotes = function(req, res) {

    var id = req.params.id;
    
    console.log('Incrementing votes for Id: ' + id);
    
    Donation.findById(id, function(err,donation) {
        if (err)
            res.send(err);

        donation.upvotes += 1;
        donation.save(function(err) {
            if (err)
                res.send(err);
            console.log('Votes Incremented: ' + id);
            //res.json({ message: 'Donation Added!', data: donation });
            router.findAll(req,res); 
            }); 

  });
}

module.exports = router;
