angular.module('todoApp', [])
.controller('todoController', ['$scope', function($scope) {
  $scope.user = false;
  $scope.cards = [
    {card: 'Introduction',
     todos: [
      {text: 'learn angular', done:true},
      {text: 'Eat lots of vegetables', done:false}
    ]},
    {card: 'Getting serious',
     todos: [
      {text: 'learn node.js', done:false},
      {text: 'grow big and strong', done: false}
    ]},
    {card: 'Super serious',
     todos: [
      {text: 'Overthrow Apple', done:false},
      {text: 'Sell out to Amazon', done: false},
      {text: 'Buy Rhode Island', done: false}
    ]}
  ];
  $scope.userSubmit = function () {
    $scope.user = !$scope.user;
  };
  $scope.addTodo = function (card) {
    card.todos.push({text:this.newTodo});
    this.newTodo = '';
  };
  $scope.addCard = function () {
    $scope.cards.push({card:$scope.newCardTitle, todos:[]});
    $scope.newCardTitle = '';
  };
}]);
