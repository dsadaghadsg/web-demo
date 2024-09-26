var app = angular.module('myApp', []);


app.controller('myCtrl1', function ($scope, $http) {
    $scope.sortBy = 'default';
    $scope.sortReverse = false;

    function fetchData() {
        $http.get('json/sanpham.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
            $scope.products = response.data.products5;
            applySorting();
        });
    }

    function applySorting() {
        $scope.products.sort(function (a, b) {
            let result;
            switch ($scope.sortBy) {
                case 'price':
                    result = a.price - b.price;
                    break;
                // Thêm các tiêu chí sắp xếp khác nếu cần

                default:
                    result = 0;
            }

            return $scope.sortReverse ? -result : result;
        });
    }

    $scope.changeSort = function (sortBy) {
        if ($scope.sortBy === sortBy) {
            $scope.sortReverse = !$scope.sortReverse;
        } else {
            $scope.sortBy = sortBy;
            $scope.sortReverse = false;
        }
        applySorting();
    };

    $scope.resetSort = function () {
        fetchData();
    };

    fetchData();
});


app.controller('myCtrl2', function ($scope, $http) {
    $http.get('json/sanpham.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.products = response.data.products6;
    });
});

app.controller('myCtrl3', function ($scope, $http) {
    $http.get('json/sanpham.json', { responseType: 'json', charset: 'utf-8' }).then(function (response) {
        $scope.products = response.data.products7   ;
    });
});

