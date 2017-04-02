var express = require("express");
var app = express();

const staticDir = 'static';
app.use(express.static(staticDir));

var server = app.listen(8080, function () {
	console.log("Listening on port %s...", server.address().port);
});

app.get("/", function (req, res) {
	res.send("Workshop : Home");
});

