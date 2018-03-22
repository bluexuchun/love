const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017';
// 连接数据库
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
  console.log('mongo connect success');
});

const User = mongoose.model('user',new mongoose.Schema({
  name:{type:String,require:true},
  age:{type:Number,require:true}
}))

User.create({
  name:'xiaoming',
  age:12
},function(err,doc){
  if(!err){
    console.log(doc)
  }else{
    console.log(err)
  }
})
const app = express();

app.get('/',function(req,res){
  res.send('<h1>hello world!</h1>');
})

app.listen('9093',function(){
  console.log('start');
})
