angular.module('mainModule.productsService', []).service('productsService', function ($http) {
    parent = this;
    this.getAll = function () {
        return $http.get('res/json/products.json');
    }
    this.getProduct = function (productid) {
        return parent.getAll().then(function (response) {
            return response.data.find(function (item) {
                return item._id === productid;
            })
        })
    }
});
