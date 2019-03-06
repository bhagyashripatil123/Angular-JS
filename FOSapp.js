//module defination
var FOSapp=angular.module('FOSapp',['ngRoute']);
FOSapp.config(function($routeProvider)
    {
    $routeProvider
    .when('/',{
        controller:'loginController',
        templateUrl:'views/login.html'
    })
    .when('/Home',{
        controller:'homeController',
        templateUrl:'views/Home.html'
    })
    .when('/order',{
        controller:'homeController',
        templateUrl:'views/order.html'
    })
    
    .otherwise({redirectTo:'/'})
});





