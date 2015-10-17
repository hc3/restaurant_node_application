app.factory('ticketsAPI', ['$http', function($http){

  var _getTicket = function(){

    return $http.get("http://localhost:3412/ticket");
          
  };

  var _saveTicket = function(ticket){

    return $http.post("/ticket", ticket);

  };

  var _deleteTicket = function(ticket){

    return $http.delete("/ticket/" + ticket._id, {params:{id: ticket._id}});

  };


  return {
    getTicket : _getTicket,
    saveTicket: _saveTicket,
    deleteTicket: _deleteTicket
  };

}]);
