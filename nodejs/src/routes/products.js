const express = require('express'),
    router = express.Router();
const producService = require('../services/productService')
router.get('/', function (req, res) {
    const products = producService.getAll();
    res.render('products/products.html', {
        products: products
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;
    const product = producService.find(id);
    res.render('products/proddetails.html', {
        product: product
    });
});

module.exports = router;
