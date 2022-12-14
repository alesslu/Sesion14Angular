var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.Sueldo = function () {
        var descuento = 0
        $scope.sueldobasico = $scope.horastraba * $scope.tarifahora;
        if ($scope.sueldobasico <= 500) {
            $scope.descuento = 0
        } else if ($scope.sueldobasico >= 501 && $scope.sueldobasico <= 1000) {
            $scope.descuento = $scope.sueldobasico * 0.02
        } else if ($scope.sueldobasico >= 1001 && $scope.sueldobasico <= 4000) {
            $scope.descuento = $scope.sueldobasico * 0.08
        } else if ($scope.sueldobasico >= 4001 && $scope.sueldobasico <= 8000) {
            $scope.descuento = $scope.sueldobasico * 0.15
        } else if ($scope.sueldobasico >= 8001 && $scope.sueldobasico <= 10000) {
            $scope.descuento = $scope.sueldobasico * 0.21
        } else {
            $scope.descuento = $scope.sueldobasico * 0.3
        }
        $scope.sueldoneto = $scope.sueldobasico - $scope.descuento
    }
    console.log($scope)
})