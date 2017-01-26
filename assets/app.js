//This file is for angular UI-router implementation

var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state("home", {
      url:"/home",
      templateUrl: "home.html"
    })
    .state("register", {
      url: "/register",
      templateUrl: "register.html"
    })
    .state("schedule", {
      url: "/schedule",
      templateUrl: "chedule.html"
    })
    .state("speakers", {
      url: "/speakers",
      templateUrl: "speakers.html"
    })
    .state("venue", {
      url: "/venue",
      templateUrl: "venue.html"
    });
});
