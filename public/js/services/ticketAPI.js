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

  return {
    getTicket : _getTicket
  };

}]);
