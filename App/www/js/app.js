// Ionic Starter App
// Init aller Controller & module
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'] )

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.startseite', {
    url: '/startseite',
    views: {
      'tab-startseite': {
        templateUrl: 'templates/tab-startseite.html',
        controller: 'StartseiteCtrl'
      }
    }
  })

  .state('tab.rezepte', {
      url: '/rezepte',
      views: {
        'tab-rezepte': {
          templateUrl: 'templates/tab-rezepte.html',
          controller: 'RezepteCtrl'
        }
      }
    })
    
    .state('tab.details', {
      url: '/details/:rezeptId',
      views: {
        'tab-details': {
          templateUrl: 'templates/rezept-detail.html',
          controller: 'RezepteCtrl'
        }
      }
    })
    
   
    
  .state('tab.add', {
    url: '/add',
    views: {
      'tab-add': {
        templateUrl: 'templates/tab-add.html',
        controller: 'AddCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/startseite');

});
