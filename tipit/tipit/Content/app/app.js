/*
  This is the main app module definition. It binds to the entire page using the ng-app directive. 
  See Shell.cshtml and look at the HTML root node
*/
angular.module('ngscaffold', ['ngRoute', 'ngscaffold.providers'
                              ,'ngscaffold.controllers','ngscaffold.services','ngscaffold.directives'])
       .config(function ($routeProvider,
                         $httpProvider,
                         $appRouterProvider) {

                    var route = $appRouterProvider.route;
                    $routeProvider.when('/', route('home'));
                });