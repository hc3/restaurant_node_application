app.factory('ticketsAPI', ['$http', function($http){

  var _saveTicket = function(ticket){

    return $http.post("/ticket/", ticket);

  };

  var _deleteTicket = function(ticket){

    return $http.delete("/ticket/" + ticket._id, {params:{id: ticket._id}});

  };


  return {
    saveTicket: _saveTicket,
    deleteTicket: _deleteTicket
  };

}]);
