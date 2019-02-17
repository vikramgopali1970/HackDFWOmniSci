'use strict';

/**
 * @ngdoc overview
 * @name feApp
 * @description
 * # feApp
 *
 * Main module of the application.
 */
angular
  .module('feApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {

      let insights =  {
          name : 'insights',
          url : '/insights',
          templateUrl: 'views/signaPay.html',
          controller: 'AboutCtrl',
          controllerAs: 'main'
      };

      let auction =  {
          name : 'auction',
          url : '/auction',
          templateUrl: 'views/auction.html',
          controller: 'auction',
          controllerAs: 'main'
      };

    $stateProvider.state(insights);
    $stateProvider.state(auction);

  });
