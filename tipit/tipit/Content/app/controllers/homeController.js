//angular.module('ngscaffold.controllers', [])
angular.module('ngscaffold.controllers')
    .controller('homeController', ['$scope', function ($scope) {
        $scope.greeting = 'Welcome Arnold';

        $scope.parentScopeData = {
            IsBordered: true,
            people: []
        };

        $scope.here = 'hello';

        $scope.parentScopeData2 = {
            people: [{
                FirstName: 'Brita',
                LastName: 'McGrath',
                Age: 1000
            }, {
                FirstName: 'Arnold',
                LastName: 'Li',
                Age: 258
            }]
        };

     

    }]);
