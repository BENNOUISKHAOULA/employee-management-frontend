app.factory('employeeService', ['$http', function($http) {
    var apiUrl = 'http://localhost:8080/employees';
  
    return {
      getAll: function() {
        return $http.get(apiUrl);
      },
      getById: function(id) {
        return $http.get(apiUrl + '/' + id);
      },
      create: function(employee) {
        return $http.post(apiUrl, employee);
      },
      update: function(id, employee) {
        return $http.put(apiUrl + '/' + id, employee);
      },
      delete: function(id) {
        return $http.delete(apiUrl + '/' + id);
      }
    };
  }]);
  