var express = require('express'),
    nunjucks = require('nunjucks'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser');

app.set('assets_path', 'build');
app.set('views', path.join(__dirname, app.get('assets_path') + '/views'));
app.use(express.static(path.join(__dirname, app.get('assets_path'))));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./src/routes/index');
var products = require('./src/routes/products');
var contact = require('./src/routes/contact');
app.set('port', 8000);

nunjucks.configure(app.get('views'), {
    autoescape: true,
    noCache: true,
    watch: true,
    express: app
});

app.use('/', routes);
app.use('/products', products);
app.use('/contact', contact);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), function () {
    console.log('Server started on port', app.get('port'));
});

module.exports = app;
