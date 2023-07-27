const dotenv =require("dotenv")
const express = require("express")
dotenv.config();
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
app.post("/Register/:email/:password",(req,res)=>{
    console.log(req.params.email);
    console.log(req.params.password);
    console.log(req.body);
    res.send("register");
})
app.use("/api",require("./routes/cart"))
const mongoose=require("mongoose")
mongoose.connect(process.env.DB).then(()=>{
    console.log("Connected");
}).catch(err=>{
    console.log("Not connected");
})
app.listen(5000,()=>{
    console.log("Server listening at port 5000");
});