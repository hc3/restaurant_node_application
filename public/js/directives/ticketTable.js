app.directive('ticketTable', function(){
  return {
    restrict: 'E',
    scope:{
      data:'='
    },
    templateUrl: 'js/directives/ticketTable.html'
  };
});
