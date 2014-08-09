angular.module('ngscaffold.providers',[])
       .constant('path', {
           root: window.location.protocol + '//' + window.location.host + '/',
           partials: window.location.protocol + '//' + window.location.host + '/Content/app/templates/partials/',
           views: window.location.protocol + '//' + window.location.host + '/Content/app/views/',
           modal_templates: window.location.protocol + '//' + window.location.host + '/Content/app/templates/modals/'
       }).provider('$appRouter',['path',function (path) {
           var that = {};
           that.$get = [function () {
               return that;
           }]
           that.route = function (baseName, resolveFunc) {
               var routeDef = {};
               routeDef.templateUrl = path['views'] + baseName + '.html';
               routeDef.controller = baseName + 'Controller';

               if (resolveFunc && angular.isObject(resolveFunc))
                   routeDef.resolve = resolveFunc;

               return routeDef;
           }
           return that;
       }]);