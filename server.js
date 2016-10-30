var express = require ('express');
var app = express ();
var PORT = process.env.PORT;

app.get('/', function(req, res) {
	res.send('Hello Express!');
	});

app.get('/about', function(req, res) {
	res.send('About us!');
	});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function() {
	console.log('it started!');
});
