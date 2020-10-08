(function () {
  function allActivitiesController(dataService, notifier) {
    const vm = this;
    vm.selectedMonth = 1; // default to January

    function showError(message) {
      notifier.error(message);
    }
    dataService.getAllClassrooms()
      .then((classrooms) => {
        vm.allClassrooms = classrooms;
        [vm.selectedClassroom] = classrooms;
      })
      .catch(showError);

    dataService.getAllActivities()
      .then((activities) => {
        vm.allActivities = activities;
      })
      .catch(showError);
  }
  // eslint-disable-next-line no-undef
  angular.module('app')
    .controller('AllActivitiesController', ['dataService', 'notifier', allActivitiesController]);
}());
