// const express = require("express");
// // const mysql = require("mysql");
// const mysql = require('mysql2');
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// CREATE TABLE chumada (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   text VARCHAR(255),
//   number INT,
//   email VARCHAR(255)
// );


// // MySQL Database Connection
// const db = mysql.createConnection({
//   host: "",
//   port: ,
//   user: "",
//   password: "",
//   database: "", // Create this in WAMP
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL");
// });

// // Save data to database
// app.post("/api/save", (req, res) => {
//   const { text, number, email } = req.body;
//   const query = "INSERT INTO chumada (text, number, email) VALUES (?, ?, ?)";
//   db.query(query, [text, number, email], (err) => {
//     if (err) throw err;
//     res.send({ message: "Data saved" });
//   });
// });

// // Retrieve data from database
// app.get("/api/retrieve", (req, res) => {
//   db.query("SELECT * FROM chumada", (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// app.delete("/api/delete/:id", (req, res) => {
//   const id = req.params.id;

//   db.query("DELETE FROM chumada WHERE id = ?", [id], (err, result) => {
//     if (err) {
//       console.error("Error deleting from MySQL:", err);
//       res.status(500).send({ message: "Error deleting from MySQL" });
//       return;
//     }

//     res.send({ message: "Data deleted successfully from MySQL" });
//   });
// });


// // Start Server
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// // MongoDB Connection
// mongoose
//   .connect("mongodb://localhost:27017/myDatabase", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Failed to connect to MongoDB:", err));

// // Define Schema and Model
// const DataSchema = new mongoose.Schema({
//   text: String,
//   number: Number,
//   email: String,
// });

// const DataModel = mongoose.model("Data", DataSchema);

// // Save data to MongoDB
// app.post("/api/save", (req, res) => {
//   const newData = new DataModel(req.body);

//   newData
//     .save()
//     .then(() => res.send({ message: "Data saved" }))
//     .catch((err) => res.status(500).send({ message: "Error saving data", error: err }));
// });

// // Retrieve data from MongoDB
// app.get("/api/retrieve", (req, res) => {
//   DataModel.find()
//     .then((results) => res.send(results))
//     .catch((err) => res.status(500).send({ message: "Error retrieving data", error: err }));
// });

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/myDatabase", { useNewUrlParser: true, useUnifiedTopology: true });

const DataSchema = new mongoose.Schema({
  text: String,
  number: Number,
  email: String,
});

const DataModel = mongoose.model("Data", DataSchema);

// Save data to MongoDB
app.post("/api/save", (req, res) => {
  const newData = new DataModel(req.body);
  newData.save();
  res.send({ message: "Data saved" });
});

// Retrieve data from MongoDB
app.get("/api/retrieve", (req, res) => {
  DataModel.find().then((results) => res.send(results));
});

app.delete("/api/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await DataModel.findByIdAndDelete(id);
    res.send({ message: "Data deleted successfully from MongoDB" });
  } catch (error) {
    console.error("Error deleting from MongoDB:", error);
    res.status(500).send({ message: "Error deleting from MongoDB" });
  }
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
