app.controller('RestaurantTickets', ['$scope', '$http', '_APIPostTicket', function($scope, $http, _APIPostTicket){
    $scope.header = {

         title: 'Alabhama Online Food Service'
    };

    $scope.started = {

       headings: {
         welcome: 'Get to know us',
         fillup:'Simple and fast'
        }
    };

    $scope.news = {

       heading:{
         intro:'Read bellow and order pretty fast',
         content:'Here you can eat buy your tickets and when you arrive everything is going to be ready! Only have a seat and eat.'
        }
    };

    $scope.tickets = [];


    $scope.types = ['Single', 'Round-trip'];

    var loadTickets = function () {
  		_APIPostTicket.success(function (data) {
  			$scope.tickets = data;
  		}).error(function (data, status) {
  			$scope.message = "Aconteceu um problema: " + data;
  		});
  	};


    $scope.addTicket = function(ticket){
      ticket.data = new Date();
  		$http.post("/ticket", ticket).success(function (data) {
  			delete $scope.ticket;
  			$scope.ticketForm.$setPristine();
        loadTickets();
    });
  };

  loadTickets();

}]);
