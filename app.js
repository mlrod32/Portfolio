var express = require("express");
var parser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.use(parser.json());

app.use(parser.urlencoded({extended: true}));
app.use(parser.text());
app.set('view engine', 'ejs');

const {Pool,Client} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host:'localhost',
  database: 'bulletinboard',
  password: 'bloodwraps32',
  port: 5432,
});

var blog;
pool.query('select * from messages', (err, res) =>{
  blog = res.rows;
});

app.get('/messageform', function(req,res){
  res.render('messageform');
});

app.get('/blog', function(req,res){
  res.render('blog',{blog:blog});
});

app.get('/', function(req,res){
  res.render('profile');
});

app.post('/submit', function(req, res){
  var t = req.body;
  pool.query(`INSERT into messages (title, body) values('${t.title}','${t.blog}')`)
  console.log(t);
  res.redirect('blog');
});

app.listen(8080);
console.log("Lisening on port 8080");
