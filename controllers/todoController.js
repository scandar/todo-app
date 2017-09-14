var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var data = [{item: 'buy stuff'},{item: 'do stuff'},{item: 'make stuff'}];

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser,function (req, res) {
        console.log(req.body);
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function (req, res) {
        data = data.filter(function (todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};
