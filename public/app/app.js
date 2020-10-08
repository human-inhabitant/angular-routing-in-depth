(function () {
  // eslint-disable-next-line no-undef
  angular.module('app', []);

  // eslint-disable-next-line no-undef
  angular
    .module('app')
    .config(['$logProvider', function ($logProvider) {
      $logProvider.debugEnabled(true);
    }]);
}());
