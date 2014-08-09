//angular.module('ngscaffold.controllers', [])
angular.module('ngscaffold.controllers')
    .controller('homeController', ['$scope', function ($scope) {
            
        //create an array of objects to ngrepeat
        $scope.parentScope = {
            percent: [{
                tenPercent: .1                
            }]
        }

        $scope.$watch('total', function ()
        {
            var total = $scope.total;
            //ten
            $scope.hereTen = total * .1;
            $scope.hereTenTotal = parseInt(total) + $scope.hereTen;

            //thirteen
            $scope.hereThirteen = total * .13;
            $scope.hereThirteenTotal = parseInt(total) + $scope.hereThirteen;

            //fifteen
            $scope.hereFifteen = total * .15;
            $scope.hereFifteenTotal = parseInt(total) + $scope.hereFifteen;

            //eighteen
            $scope.hereEighteen = total * .18;
            $scope.hereEighteenTotal = parseInt(total) + $scope.hereEighteen;

            //twenty
            $scope.hereTwenty = total * .2;
            $scope.hereTwentyTotal = parseInt(total) + $scope.hereTwenty;

        })

        var TotalFunction = function (percent, total) {
            var added = parseInt(total) + percent;

            return added
        };

    }]);
