var express = require('express');
var app = express();
var open = require('open');

// serve static files like .HTML, .CSS, .JS,  etc
app.use(express.static('./public'));

// todo: add routes to express for your AJAX requests / server-side calls

app.get('/users', function(req,res) {
    // example of sending data back from the server. this could have been from a database
    res.send([
        { name: 'Gordy', age : 30 },
        { name: 'Lanzer', age : 55}
    ])
});

// start server
var port = 3000;
app.listen(port, function () {
    console.log('Web server listening on http://localhost:' + port);
    open('http://localhost:' + port)
});