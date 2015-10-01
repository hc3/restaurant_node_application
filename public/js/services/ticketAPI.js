app.factory('ticketsAPI', ['$http', function($http){

var _getTicket = function(){

 return $http.get("/tickets")
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

  return {
    getTicket : _getTicket,
    saveTicket: _saveTicket
  };

}]);
