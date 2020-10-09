(function () {
  function classroomController(dataService, notifier, $routeParams) {
    // eslint-disable-next-line no-unused-vars
    const vm = this;
    vm.month = $routeParams.month;
    function showError(message) {
      notifier.error(message);
    }

    dataService
      .getClassroom($routeParams.id)
      .then((classroom) => {
        vm.currentClassroom = classroom;
        if ($routeParams.month) {
          if (classroom.activities.length > 0) {
            vm.timePeriod = dataService.getMonthName($routeParams.month);
          } else {
            vm.timePeriod = 'No activities this month';
          }
        } else {
          vm.timePeriod = 'All activities';
        }
      })
      .catch(showError);
  }

  // eslint-disable-next-line no-undef
  angular
    .module('app')
    .controller('ClassroomController', ['dataService', 'notifier', '$routeParams', classroomController]);
}());
