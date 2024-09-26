var app = angular.module('myApp', []);

app.controller('myCtrl1', function ($scope, $http) {
    $http.get('json/categories.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.categories = response.data.categories;
    });
});

app.controller('myCtrl2', function ($scope, $http) {
    $http.get('json/products2.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.products = response.data.products;
    });
});

app.controller('myCtrl3', function ($scope, $http) {
    $http.get('json/categories.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.categories = response.data.categories2;
    });
});

app.controller('myCtrl4', function ($scope, $http) {
    $http.get('json/products2.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.products= response.data.products2;
    });
});
app.controller('myCtrl5', function ($scope, $http) {
    $http.get('json/categories.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.categories= response.data.categories3;
    });
});
app.controller('myCtrl6', function ($scope, $http) {
    $http.get('json/products2.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.products= response.data.products3;
    });
});
app.controller('myCtrl7', function ($scope, $http) {
    $http.get('json/products2.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.products= response.data.products4;
    });
});

app.controller('myCtrl8', function ($scope, $http) {
    $http.get('json/products2.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.products= response.data.products4;
    });
});
