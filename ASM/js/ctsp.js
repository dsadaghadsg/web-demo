var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http,$location) {
  $http.get('json/chitietsanpham.json').then(function (response) {
    $scope.clothes = response.data.clothes;

    $scope.images = response.data.images;
    $scope.mainImage = $scope.images[0]; // Set the initial main image
    $scope.contactInfo = response.data.contactInfo;
    $scope.contactInfoStyle = {
      'font-size': $scope.contactInfo.fontSize,
      'font-weight': $scope.contactInfo.fontWeight,
      'color': $scope.contactInfo.color
    };
    $scope.addToCartButton = response.data.addToCartButton;
    $scope.buyNowButton = response.data.buyNowButton;
    $scope.shippingPolicy = response.data.shippingPolicy;
    $scope.checkingPolicy = response.data.checkingPolicy;

    
  });

  $scope.changeMainImage = function (newImage) {
    $scope.mainImage = newImage;
    
  };
  
  
  
});



