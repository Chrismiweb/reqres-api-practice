// const express = require('');
const express = require('express')
const app = express()
const port = 2000 
const ejs = require('ejs')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")



app.get('/', async(req, res)=>{

    // res.send("hello world ")
    const url = "https://reqres.in/api/users";
    const respond = await fetch(url)  
    // await fetch(url)
    .then(res => res.json())

    const user = respond.data

    const myuser = user.map((use)=>{
       return{
        // id :  use.id
        first_name : use.first_name,
        last_name :  use.last_name,
        email : use.email,
        image : use.avatar


       }

    })
      res.render('Reqres', {myReqres_assignment: myuser})
    // res.rend("Reqres");





})

app.listen(port, () => {
    console.log("server is running on port " + port);
});