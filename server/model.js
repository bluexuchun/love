const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/love';
mongoose.connect(DB_URL);

const models = {
  user:{
    'account':{type:String,require:true},
    'pwd':{type:String,require:true}
  }
}

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}
