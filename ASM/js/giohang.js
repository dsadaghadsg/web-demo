var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {
    // Data from JSON
    $http.get('json/giohang.json')
        .then(function (response) {
            // Save product data to the $scope.giohang variable
            $scope.giohang = response.data;
            // Initialize displayTotalPrice
            updateDisplayTotalPrice();
        })
        .catch(function (error) {
            console.error('Error loading data: ', error);
        });

    // Function to update quantity
    $scope.updateQuantity = function (product, value) {
        product.quantity += value;

        // Ensure quantity is not negative
        if (product.quantity < 0) {
            product.quantity = 0;
        }

        // Implement your logic for updating the total price
        updateTotalPrice(product);

        // Call the new function to update the total price in the "Tổng tiền" section
        updateDisplayTotalPrice();
    };

    // Function to delete a product
    $scope.deleteProduct = function (product) {
        // Implement your logic to remove the product from the list
        var index = $scope.giohang.indexOf(product);
        if (index !== -1) {
            $scope.giohang.splice(index, 1);
        }

        // Call the new function to update the total price in the "Tổng tiền" section
        updateDisplayTotalPrice();
    };

    // Function to update total price based on the product quantity
    function updateTotalPrice(product) {
        product.total = (parseFloat(product.price.replace(/[^\d.]/g, '')) * product.quantity).toFixed(2);
    }

   // Initialization in the controller
$scope.displayTotalPrice = 0;

// Function to update the total price in the "Tổng tiền" section
function updateDisplayTotalPrice() {
    // Calculate the total price based on the updated quantities of all products
    var total = $scope.giohang.reduce(function (accumulator, product) {
        return accumulator + parseFloat(product.total);
    }, 0);

    // Update the display of the total price
    $scope.displayTotalPrice = total.toFixed(2);
}
});
