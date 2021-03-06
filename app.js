var express = require("express");
var app = express();
var bodyParser = require("body-parser");



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
	res.render("home");
});

app.get("/about", function(req, res){
	res.render("about");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server is starting...");
});