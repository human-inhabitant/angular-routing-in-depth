(function () {
  // eslint-disable-next-line no-undef
  angular
    .module('app')
    .filter('activityMonthFilter', function (activities, filterMonth) {
      console.info('activities', activities);
      console.info('filterMonth', filterMonth);
      // if no filterMonth was provided, return all activities
      if (!filterMonth) {
        return activities;
      }

      const filteredActivities = [];

      // eslint-disable-next-line no-undef
      angular.forEach(activities, (activity) => {
        const activityMonth = new Date(activity.date).getMonth();

        // JavaScript month will be zero-based, so add 1 to it
        if ((activityMonth + 1) === filterMonth) {
          filteredActivities.push(activity);
        }
      });

      return filteredActivities;
    });
}());
