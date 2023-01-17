const express = require("express")
const app = express()

let port = 8080

app.use(express.urlencoded({extended: true}))

// Establish Static folders
app.use(express.static("scripts"))
app.use(express.static("views", {"extensions": ["html", "htm"]}))
app.use(express.static("assets"))
app.use(express.static("styles"))

app.set("view engine", "ejs")

// Open server on port defined above
app.listen(port, ()=>{
    console.log(`Server started on port ${port}, url: http://localhost:${port}`)
});


app.get('/', (req, res) =>{
    res.render("index")
})

app.get('/invite', (req, res)=>{
    res.render("invite")
})

app.get('/commands', (req, res)=>{
    res.render("commands")
})

app.get('/contact', (req, res)=>{
    res.render("contact")
})