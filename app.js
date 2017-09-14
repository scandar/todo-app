// requires
var express = require('express');
var todoController = require('./controllers/todoController');

// init express
var app = express();

// setup view engine
app.set('view engine', 'ejs');

// static files middleware
app.use(express.static('./public'));

// fire controllers
todoController(app);

// Server
var port = 3000;
app.listen(port, function (err) {
    if (err)
        console.log(err);
    else
        console.log('listening on port ' + port);
});
