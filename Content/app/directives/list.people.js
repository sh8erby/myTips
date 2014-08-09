var directive_broker = directive_broker || angular.module('ngscaffold.directives', ['ui.bootstrap']);

directive_broker.directive('peoplelist', function (path) {
    //var controller = attr['controller'];
    //var url = path.partials + attr['template'] + '.html';
    return {

        restrict: 'E',
        scope: {
            data: '=listData'
        },
        controller: 'listPeopleController',
        //controller: controller,
        //controller: function($scope){
        //    $scope.confirmSelection = function (data) {

        //        $scope.$parent.confirmSelection(data);
        //    }
        //},
           
        templateUrl: 'Content/app/templates/partials/people-list.html'
    };
});