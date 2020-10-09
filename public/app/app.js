(function () {
  // eslint-disable-next-line no-undef
  angular.module('app', ['ngRoute']);

  // eslint-disable-next-line no-undef
  angular
    .module('app')
    .config(['$provide', '$logProvider', '$routeProvider', '$locationProvider', ($provide, $logProvider, $routeProvider, $locationProvider) => {
      $logProvider.debugEnabled(true);
      // $provide.value('$logProvider', $logProvider);
      // $locationProvider.html5Mode(true);
      $routeProvider
        .when('/', {
          controller: 'HomeController',
          controllerAs: 'home',
          templateUrl: '/app/templates/home.html'
        })
        .when('/schools', {
          controller: 'AllSchoolsController',
          controllerAs: 'schools',
          templateUrl: '/app/templates/allSchools.html'
        })
        .when('/classrooms', {
          controller: 'AllClassroomsController',
          controllerAs: 'classrooms',
          templateUrl: '/app/templates/allClassrooms.html'
        })
        .when('/classrooms/:id', {
          controller: 'ClassroomController',
          controllerAs: 'classroom',
          templateUrl: '/app/templates/classroom.html'
        })
        .when('/activities', {
          controller: 'AllActivitiesController',
          controllerAs: 'activities',
          templateUrl: '/app/templates/allActivities.html',
          resolve: {
            activities(dataService) {
              return dataService.getAllActivities();
            }
          }
        })
        .when('/classrooms/:id/detail/:month?', {
          controller: 'ClassroomController',
          controllerAs: 'classroom',
          templateUrl: '/app/templates/classroomDetail.html'
        })
        .otherwise('/');
    }])
    /* .decorator('$log', ['$logProvider', '$delegate', ($logProvider, $delegate) => {
      // eslint-disable-next-line no-param-reassign
      $delegate.debug = function () {
        if (!$logProvider.debugEnabled()) {
          return;
        }
        // eslint-disable-next-line prefer-spread,prefer-rest-params
        $delegate.log.apply($delegate, arguments);
      };
      return $delegate;
    }]) */
    .run(['$rootScope', '$log', function ($rootScope, $log) {
      $rootScope.$on('$routeChangeSuccess', (event, current, previous) => {
        $log.debug('Successfully changed routes...');
        $log.debug(event);
        $log.debug(current);
        $log.debug(previous);
      });
      $rootScope.$on('$routeChangeError', (event, current, previous, rejection) => {
        $log.debug('Error changing routes...');
        $log.debug(event);
        $log.debug(current);
        $log.debug(previous);
        $log.debug(rejection);
      });
    }]);
}());
