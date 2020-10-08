(function () {
  function notifier() {
    // eslint-disable-next-line no-undef
    toastr.options = {
      showDuration: '300',
      timeOut: '2000'
    };
    function success(message) {
      // eslint-disable-next-line no-undef
      toastr.success(message);
    }

    function error(message) {
      // eslint-disable-next-line no-undef
      toastr.error(message);
    }
    return {
      success,
      error
    };
  }
  // eslint-disable-next-line no-undef
  angular
    .module('app')
    .factory('notifier', notifier);
}());
