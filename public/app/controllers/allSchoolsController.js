(function () {
  function allSchoolsController(dataService, notifier) {
    const vm = this;
    function showError(message) {
      notifier.error(message);
    }
    dataService.getAllSchools()
      .then((schools) => {
        vm.allSchools = schools;
      })
      .catch(showError);
  }
  // eslint-disable-next-line no-undef
  angular
    .module('app')
    .controller('AllSchoolsController', ['dataService', 'notifier', allSchoolsController]);
}());
