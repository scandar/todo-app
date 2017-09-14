var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// db connection
mongoose.connect('mongodb://admin:admin@ds137464.mlab.com:37464/todoapp', {useMongoClient: true});

var todoSchema = new mongoose.Schema({item: String});
var Todo = mongoose.model('Todo', todoSchema);

var urlencodedParser = bodyParser.urlencoded({extended: false});

// var data = [{item: 'buy stuff'},{item: 'do stuff'},{item: 'make stuff'}];

module.exports = function (app) {

    app.get('/todo', function (req, res) {

        Todo.find({}, function (err, data) {
            if(err) throw err;
            res.render('todo', {todos: data});
        })

    });

    app.post('/todo', urlencodedParser,function (req, res) {

        Todo(req.body).save(function (err,data) {
            if (err) throw err;
            res.json(data);
        });

    });

    app.delete('/todo/:item', function (req, res) {

        Todo.find({item: req.params.item.replace(/\-/g, " ")})
        .remove(function (err,data) {
            if (err) throw err;
            res.json(data);
        });
        
    });

};
