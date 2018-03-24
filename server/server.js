const express = require('express');
//引用cookie
const cookieParser = require('cookie-parser');
const userRouter = require('./user.js');
const app = express();

// 获取到是/user的时候 直接引用user.js这个文件
app.use('/user',userRouter);

app.use(cookieParser());
app.listen('9093',function(){
  console.log('start');
})
