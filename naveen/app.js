var mysql = require('mysql');
var bodyparser = require('body-parser')
var cors = require('cors')
var express = require('express')

var app = express()
app.use(cors())
app.use(bodyparser.json())

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"gokul"
})
con.connect(function(err)
{
  if (err) throw err;
  console.log("Connected")
})

app.get('/movies',function(req,res)
{
  con.query("SELECT * FROM movies",function(err,result){
    if(err) throw err
    res.json(result)
  })
})

app.post('/add-movie',function(req,res){
  var movie = req.body;
  var sql = `INSERT INTO movies(name,boxoffice) values('${movie.name}',${movie.boxoffice})`
  con.query(sql,function(err,result){
    if(err) throw err;
    res.send('movie added')
  })
})

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});