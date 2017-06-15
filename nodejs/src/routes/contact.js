var express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.render('contact.html');
});

router.post('/process', function (req, res) {
    console.log("\nFirstName: " + req.body.firstName + " \nLastName: " + req.body.lastName + " \nMessage: " + req.body.message)
    res.render('contact.html');
});
module.exports = router;