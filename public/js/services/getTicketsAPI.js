app.service('getTicketsAPI', ['$http', function($http){

   this.getTicket = function(){
      return $http.get("/ticket/");
   };


}]);
