const express = require("express")
const path = require("path")
const exphbs = require("express-handlebars")
const logger = require("./loger")
const app = express()
const members = require("./Members")

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","index.html"))
// })

app.engine('handlebars', exphbs.engine({defaultLayout:"main"}));
app.set('view engine', 'handlebars');

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger)

app.get("/",(req,res)=>res.render("home",{
    title: "Member App",
    members
}))

app.use("/api/members",require("./api/apirouter"))
app.use(express.static(path.join(__dirname,"public")))

const PORT = process.env.PORT  || 5000

app.listen(PORT,()=>console.log("server is up"))

 

//[]  {}



