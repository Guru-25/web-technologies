const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const path=require('path');
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));
mongoose.connect("mongodb://localhost:27017/eventDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const eventSchema =new mongoose.Schema({
    name:String,
    date:Date,
    place:String,
    price:Number
});
const Event=mongoose.model('Event',eventSchema);
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form3.html"));
});
app.get("/events",async(req,res)=>{
    try{
    const events=await Event.find();
    res.status(200).json(events);
    }
    catch(err){
        res.status(400).send(err);
    }

});

app.post("/events",async(req,res)=>{
    try{
        const newevent=new Event(req.body);
        const savedevent= await newevent.save();
        res.status(200).json(savedevent);
    }
    catch(err){
        res.status(400).send(err);
    }
});

app.put("/events/:id",async (req,res)=>{
    try{
        const updatedEvent=await Event.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updatedEvent);
    }
    catch(err){
        res.status(400).send(err);
    }
});

app.delete("/events/:id",async (req,res)=>{
    try{
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted successfully");
    }
    catch(err){
        res.status(400).send(err);
    }
});
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`the server is running in the port ${PORT}`);
});