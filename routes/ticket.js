
/**
* @module      : Routes
* @description : Maps routes and actions
*/

var Ticket = require('../models/ticket.js');

module.exports = function(app) {


/**
* Find and retrieves all tickets
* @param {Object} req HTTP request object.
* @param {Object} res HTTP response object.
*/
findAllTickets = function(req, res) {
	console.log("GET - /tickets");
	return Ticket.find(function(err, tickets) {
		if (!err) {
			return res.send(tickets);
		} else {
			res.statusCode = 500;
			console.log('Internal error(%d): %s',res.statusCode,err.message);
			return res.send({ error: 'Server error' });
		}
	});
};


/**
* Find and retrieves a single ticket by its ID
* @param {Object} req HTTP request object.
* @param {Object} res HTTP response object.
*/
findById = function(req, res) {
	console.log("GET - /ticket/:id");
	return Ticket.findById(req.params.id, function(err, ticket) {
		if (!ticket) {
			res.statusCode = 404;
			return res.send({ error: 'Not found' });
		}

		if (!err) {
			return res.send({ status: 'OK', ticket:ticket });
		} else {
			res.statusCode = 500;
			console.log('Internal error(%d): %s', res.statusCode, err.message);
			return res.send({ error: 'Server error' });
		}
	});
};


/**
* Creates a new ticket from the data request
* @param {Object} req HTTP request object.
* @param {Object} res HTTP response object.
*/
addTicket = function(req, res) {
	console.log('POST - /ticket');
	var ticket = new Ticket({
		cardno:    req.body.cardno,
		type:      req.body.type,
		price:     req.body.price,
		datesold:  req.body.datesold
	});

	ticket.save(function(err) {

	if (err) {
		console.log('Error while saving ticket: ' + err);
		res.send({ error:err });
		return;
	} else {
		console.log("Ticket created");
		return res.send({ status: 'OK', ticket:ticket });
	}

	});
};



/**
* Update a ticket by its ID
* @param {Object} req HTTP request object.
* @param {Object} res HTTP response object.
*/
updateTicket = function(req, res) {
	console.log("PUT - /ticket/:id");
	return Ticket.findById(req.params.id, function(err, ticket) {
		if (!ticket) {
			res.statusCode = 404;
			return res.send({ error: 'Not found' });
		}

		if (req.body.cardno != null)      ticket.cardno = req.body.cardno;
		if (req.body.type != null)        ticket.type = req.body.type;
		if (req.body.price != null)       ticket.price = req.body.price;
		if (req.body.datesold != null)    ticket.datesold  = req.body.datesold;

		return ticket.save(function(err) {
			if (!err) {
				console.log('Updated');
				return res.send({ status: 'OK', ticket:ticket });
			} else {
				if (err.name == 'ValidationError') {
					res.statusCode = 400;
					res.send({ error: 'Validation error' });
				} else {
					res.statusCode = 500;
					res.send({ error: 'Server error' });
				}
				console.log('Internal error(%d): %s',res.statusCode,err.message);
			}

			res.send(ticket);

		});
	});
};


/**
* Delete a ticket by its ID
* @param {Object} req HTTP request object.
* @param {Object} res HTTP response object.
*/
deleteTicket = function(req, res) {
	console.log("DELETE - /ticket/:id");
	return Ticket.findById(req.params._id, function(err, ticket) {
		if (!ticket) {
			res.statusCode = 404;
			return res.send({ error: 'Not found' });
		}

		return ticket.remove(function(err) {
			if(!err) {
				console.log('Removed ticket');
				return res.send({ status: 'OK' });
			} else {
				res.statusCode = 500;
				console.log('Internal error(%d): %s',res.statusCode,err.message);
				return res.send({ error: 'Server error' });
			}
		})
	});
}

app.get('/tickets', findAllTickets);
app.get('/ticket/:id', findById);
app.post('/ticket', addTicket);
app.put('/ticket/:id', updateTicket);
app.delete('/ticket/:id', deleteTicket);

}
