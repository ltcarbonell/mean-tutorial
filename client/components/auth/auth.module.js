'use strict';

angular.module('meanTutorialApp.auth', ['meanTutorialApp.constants', 'meanTutorialApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
