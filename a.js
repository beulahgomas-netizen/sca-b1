const express=require("express")
const app=express()
app.use(express.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/cse_fighters")
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch((e)=>{
    console.log(`error is ${e}`)
})

const studentsSchema=new mongoose.Schema({
    name:"String",
    age:"Number",
    city:"String"
})

const student=mongoose.model("studentsdata",studentsSchema)

app.post("/studentcreate",(req,res)=>{
    const s=new student({
        name:req.body.name,
        age:req.body.age,
        city:req.body.city
    })
    s.save()
    res.send("data is created")
})






const port=5000
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})