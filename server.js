//Simple express server
var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('Hello Express');
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
