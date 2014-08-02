angular.module('app', ['ngRoute',
                       'app.controllers',
])
       .config(function ($routeProvider) {
           $routeProvider
            .when('/home', { templateUrl: 'Content/app/views/home.html', controller: 'homeController' })


       })


angular.module('app', ['ngRoute', 
                       'app.controllers',
                       'app.provider'])
       .config(function ($routeProvider,
                         $httpProvider,
                         $appRouterProvider) {

           var route = $appRouterProvider.route;
           $routeProvider.when('/', route('home'));
       });