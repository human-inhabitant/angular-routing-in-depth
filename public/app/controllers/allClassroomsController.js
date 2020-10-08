(function () {
  function allClassroomsController(dataService, notifier) {
    const vm = this;
    function showError(message) {
      notifier.error(message);
    }
    dataService.getAllClassrooms()
      .then((classrooms) => {
        vm.allClassrooms = classrooms;
      })
      .catch(showError);
  }
  // eslint-disable-next-line no-undef
  angular.module('app')
    .controller('AllClassroomsController', ['dataService', 'notifier', allClassroomsController]);
}());
