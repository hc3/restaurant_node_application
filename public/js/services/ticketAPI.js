app.factory('ticketsAPI', ['$http', function($http){

  var _getTicket = function(){

    return $http.get("/ticket")
           .success(function(data){
             return data;
           })
           .error(function(err){
             return err;
          });
  };

  var _saveTicket = function(ticket){

    return $http.post("/ticket", ticket);

  };

  var _deleteTicket = function(ticket){

    return $http.delete("/ticket/:id", {params:{id: ticket._id}});

  };


  return {
    getTicket : _getTicket,
    saveTicket: _saveTicket,
    deleteTicket: _deleteTicket
  };

}]);
