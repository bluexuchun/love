const express = require('express');
const Router = express.Router();
const model = require('./model.js');
const User = model.getModel('user');

//阿里云短信服务
const SMS = require('aliyun-sms-node');
const sms = new SMS({
  AccessKeyId: 'LTAIRZ3eLNzIP3jq',
  AccessKeySecret: 'vvRbYSPbl64zfFWi6yHryMgEqNqSaW'
});

Router.get('/getUser',function(req,res){
  User.find({},function(err,doc){
    if(!err){
      return res.json({code:1,msgs:doc})
    }else{
      return res.json({code:0,msgs:err})
    }
  })
})
// 发送验证码
Router.get('/sendMsg',function(req,res){
  sms.send({
    Format: 'JSON',
    Action: 'SendSms',
    TemplateParam: '{"code":"1234"}',
    PhoneNumbers: '15221757886',
    SignName: '徐淳Cyun',
    TemplateCode: 'SMS_119920092'
  }).then(function (data) {
      console.log('发送成功');
      console.log(data)
  }).catch(function (err) {
      console.log(err)
  })
})

module.exports = Router;
