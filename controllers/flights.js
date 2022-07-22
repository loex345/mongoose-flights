
const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new:newFlight,
    create,
    show,
    edit
};

function index(req, res) {
   Flight.find({}, function(err, flights){
      res.render('flights/index', { flights });
   });
}

function newFlight (req, res) {
    res.render('flights/new');
}

function create (req, res) {
 const flight = new Flight(req.body);
 flight.save(function(err) {
  if (err) return res.redirect('flights/new');
  res.redirect('/flights/' + flight._id); 
 });
}

function show (req, res) {
 Flight.findById(req.params.id, function(err, flight) {
   Ticket.find({flight: flight._id}, function(err, tickets){
       console.log(flight,tickets);
    res.render('flights/show', {title: 'Flight Detail', flight, tickets });
   });
 });
}

function edit (req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flight/edit', { flight })
    });
}