(function () {
  function homeController(dataService, notifier) {
    const vm = this;
    vm.message = 'Welcome to School Buddy!';

    function showError(message) {
      notifier.error(message);
    }

    dataService.getAllSchools()
      .then((schools) => {
        vm.allSchools = schools;
        vm.schoolCount = schools.length;
      })
      .catch(showError);

    dataService.getAllClassrooms()
      .then((classrooms) => {
        vm.allClassrooms = classrooms;
        vm.classroomCount = classrooms.length;
      })
      .catch(showError);

    dataService.getAllActivities()
      .then((activities) => {
        vm.allActivities = activities;
        vm.activityCount = activities.length;
      })
      .catch(showError);
  }
  // eslint-disable-next-line no-undef
  angular
    .module('app')
    .controller('HomeController', ['dataService', 'notifier', homeController]);
}());
