const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express app setup
const app = express();
app.use(bodyParser.json());
app.use(cors());

// // MongoDB connection
// mongoose.connect('', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

mongoose.connect('mongodb://127.0.0.1:27017/webtech_folder_modifications',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=>console.log("connected successfully..."))



// Goal Model
const Goal = mongoose.model('Goals', {
    text: String
});


// Routes
app.get('/restapi/goals', async (req, res) => {
    const goals = await Goal.find();
    console.log(goals)
    res.json(goals);
});

app.post('/restapi/goals', async (req, res) => {
    const goal = new Goal({ text: req.body.text });
    await goal.save();
    res.json(goal);
});

app.delete('/restapi/goals/:id', async (req, res) => {
    await Goal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Goal deleted' });
});

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
