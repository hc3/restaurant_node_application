/**
* @description : Represent data model for the Tickets
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Ticket = new Schema({

	cardno:  {
		type    : String,
		require : true
	},
	type: {
		type    : String,
		require : true
	},
	price: {
		type    : Number,
		require : true
	},
	datesold: {
		type    : Date,
		default : Date.now
	},

});

module.exports = mongoose.model('Ticket', Ticket);
