app.controller('RestaurantTickets', ['$scope', 'ticketsAPI', function($scope, ticketsAPI){
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

    var today = new Date();
    $scope.today = today.toISOString();

    var loadTickets = function () {
  		ticketsAPI.getTicket().success(function (data) {
  			$scope.tickets = data;
  		}).error(function (data, status) {
  			$scope.message = "Aconteceu um problema: " + data;
  		});
  	};


    $scope.addTicket = function(ticket){
      ticket.data = new Date();
  		ticketsAPI.saveTicket(ticket).success(function (data) {
  			delete $scope.ticket;
  			$scope.ticketForm.$setPristine();
        loadTickets();
    });
  };

  $scope.isTicketSelected = function(tickets){
    return tickets.some(function(ticket){
      return ticket.selected;
    });
  };

  $scope.deleteTicket = function(tickets){
    $scope.tickets = tickets.filter(function(ticket){
      if (!ticket.selected) return ticket;
      ticketsAPI.deleteTicket(ticket).success(function(data){
        loadTickets();
      });
    });
  };

  loadTickets();

}]);
