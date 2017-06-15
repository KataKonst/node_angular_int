module.exports.getAll = function () {
    return require('./producs.json');
}

module.exports.find = function (id) {
    const searchResult =
        module.exports.getAll().find(function (value) {
            return value._id === id;
        });
    return searchResult;
}