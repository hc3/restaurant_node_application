app.directive('ticketTable', function(){
  return {
    restrict: 'E',
    scope:{
      data:'='
    },
    templateUrl: 'js/directives/ticketTable.html',
    link: function(data, element, attrs){
      data.orderSearch = function(field){
        data.orderCriteria = field;
        data.orderDirection = !data.orderDirection;
      }
    }
  };
});
