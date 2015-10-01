app.factory('_APIPostTicket', ['$http', function($http){
 return $http.get("/ticket")
        .success(function(data){
          return data;
        })
        .error(function(err){
          return err;
       });

}]);
