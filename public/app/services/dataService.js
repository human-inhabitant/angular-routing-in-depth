(function () {
  function dataService($http, $q, $log, $timeout) {
    function getAllSchools() {
      return $http.get('api/schools')
        .then((response) => response.data)
        .catch((response) => {
          $log.error(`Error retrieving schools: ${response.statusText}`);
          return $q.reject('Error retrieving schools.');
        });
    }

    function getAllClassrooms() {
      return $http.get('api/classrooms')
        .then((response) => response.data)
        .catch((response) => {
          $log.error(`Error retrieving classrooms: ${response.statusText}`);
          return $q.reject('Error retrieving classrooms.');
        });
    }

    function getClassroom(id) {
      return $http.get(`api/classrooms/${id}`)
        .then((response) => response.data)
        .catch((response) => {
          $log.error(`Error retrieving classroom (${id}): ${response.statusText}`);
          return $q.reject('Error retrieving classroom.');
        });
    }

    function getAllActivities() {
      const deferred = $q.defer();

      $timeout(() => {
        $http.get('api/activities')
          .then((response) => {
            deferred.resolve(response.data);
          })
          .catch((response) => {
            $log.error(`Error retrieving activities: ${response.statusText}`);
            return $q.reject('Error retrieving activities.');
          });
      }, 1000);

      return deferred.promise;
    }

    function getMonthName(month) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      return monthNames[month - 1];
    }

    return {
      getAllSchools,
      getAllClassrooms,
      getAllActivities,
      getClassroom,
      getMonthName
    };
  }

  // eslint-disable-next-line no-undef
  angular
    .module('app')
    .factory('dataService', ['$http', '$q', '$log', '$timeout', dataService]);
}());
