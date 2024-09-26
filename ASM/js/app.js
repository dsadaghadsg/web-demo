var app = angular.module('myApp', []);
app.controller('ShippingController', function ($scope, $http) {
    $http.get('json/categories.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.shippingMessages = response.data.ship;
    });
});