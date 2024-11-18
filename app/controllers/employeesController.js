app.controller('employeesController', ['$scope', '$location', '$routeParams', 'employeeService',
    function($scope, $location, $routeParams, employeeService) {
      $scope.employees = [];
      $scope.employee = {};
  
      // Charger tous les employés
      $scope.loadEmployees = function() {
        employeeService.getAll().then(function(response) {
          $scope.employees = response.data;
        });
      };
  
      // Charger un employé par ID
      $scope.loadEmployee = function() {
        var id = $routeParams.id;
        if (id) {
          employeeService.getById(id).then(function(response) {
            $scope.employee = response.data;
          });
        }
      };
  
      // Ajouter un employé
      $scope.addEmployee = function() {
        employeeService.create($scope.employee).then(function() {
          $location.path('/employees');
        });
      };
  
      // Modifier un employé
      $scope.updateEmployee = function() {
        var id = $routeParams.id;
        employeeService.update(id, $scope.employee).then(function() {
          $location.path('/employees');
        });
      };
  
      // Supprimer un employé
      $scope.deleteEmployee = function(id) {
        if (confirm('Are you sure you want to delete this employee?')) {
          employeeService.delete(id).then(function() {
            $scope.loadEmployees();
          });
        }
      };
    }
  ]);
  