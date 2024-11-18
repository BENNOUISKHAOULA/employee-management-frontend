var app = angular.module('employeeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/employees', {
      templateUrl: 'app/views/employees.html',
      controller: 'employeesController'
    })
    .when('/employees/add', {
      templateUrl: 'app/views/addEmployee.html',
      controller: 'employeesController'
    })
    .when('/employees/edit/:id', {
      templateUrl: 'app/views/editEmployee.html',
      controller: 'employeesController'
    })
    .otherwise({
      redirectTo: '/employees'
    });
}]);
