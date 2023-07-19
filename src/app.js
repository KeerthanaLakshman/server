const express = require("express")
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home");
})
app.post("/Login",(req,res)=>{
    const {email,password}=req.body;
    if(password=="keerthana@123"){
        res.send("Login successfull");
    }
    else{
        res.send("password is incorrect");
    }
})
app.post("/Register",(req,res)=>{
    console.log(req.body);
    res.send("register");
})


app.listen(5000,()=>{
    console.log("Server listening at port 5000");
});