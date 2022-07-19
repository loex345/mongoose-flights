const Flight = require('../models/flight');

module.exports = {
    create,
    update
};

function create(req,res){
    Flight.findById(req.params.id, function(err, flight){
     flight.destinations.push(req.body);
     flight.save(function(err) {
      res.redirect('/flights/'+ flight._id)
     });
    });
}

function update(req, res) {
    Flight.update(req.params.id, req.body);
    res.redirect(`/flight/${req.params.id}`);
}