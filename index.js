var express = require("express");
var app = express();
var url = require("url");


app.get("/", function(req,res){
   res.setHeader("Content-Type","text/plain");
   res.send("Bonjour, vous êtes à l'accueil");

});

app.get("/cave", function(req,res){
   res.setHeader("Content-Type","text/plain");
   res.send("Bonjour, vous êtes dans la cave à vin");

});

app.get("/cave/sous-sol", function(req,res){
   res.setHeader("Content-Type", "text/plain");
   res.send("Bonjour, vous êtes dans le sous-sol");

});

/* app.get("/cave/sous-sol/:chambre", function(req,res){
   res.setHeader("Content-Type","text-plain");
   res.end("Bonjour, vous êtes au sous-sol dans la "+req.params.chambre);

}); */

app.get("/cave/sous-sol/:chambre", function(req,res){
   res.render("chambre.ejs",{etage: req.params.cave});

});

app.use(function(req,res,next){
   res.setHeader("Content-Type","text/plain");
   res.status(400).send("Page introuvable");

});

app.listen(8080);

