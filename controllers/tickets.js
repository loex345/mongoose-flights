const Flight = require('../models/flight');

module.exports = {
    create,
    new:newTicket
}
    function newTicket (req, res) {
        res.render('tickets/new');
    }
    function create (req,res){
        Flight.findById(req.params.id, function(err, flight){
         flight.ticket.price.push(req.body);
         flight.ticket.seat.push(req.body);
         flight.save(function(err) {
          res.redirect('/flights/'+ flight._id)
         });
        });
    }
