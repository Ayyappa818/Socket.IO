var express = require('express')
var app = express();
var fs = require('fs');
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');

app.get('/soc',(req,res)=>{
    console.log(req)
    console.log(res)
    console.log("Kabaddi")
})

app.listen(4600,()=>{
    console.log("server is running on port 4600")
})