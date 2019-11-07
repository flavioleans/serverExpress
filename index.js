const express = require("express")
const app = express()
app.use(express.static('html'))

//rota principal
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

//nova rota
app.get("/about", function(req, res){
    res.send("Page About Us...")
})

//nova rota
app.get("/blog", function(req, res){
    res.send("Welcome to my Blog!")
})

//rota hello com parametro
app.get("/hello/:name/:age/:office", function(req, res){
    res.send("<h1>Ola "+ req.params.name+"</h1>" + "<h3>Age: </h3>"+req.params.age+"<h3> Oficce: "+req.params.office)
})

app.listen(8081, function(){
    console.log("Server active in http://localhost:8081")
})