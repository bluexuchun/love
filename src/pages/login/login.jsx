import React from 'react'
import PropTypes from 'prop-types'
import logoImg from '../../pages/images/logo.jpeg'
import './login.less'
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import { createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import axios from 'axios';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      account:'',
      pwd:''
    }
  }
  render () {
    return (
      <div className="login">
        <div className="logoimg">
          <img src={logoImg} ></img>
        </div>

        <div className="login-content">
          <Grid container spacing={16} className="login-form">
            <Grid item xs={12}>
              <TextField
                id="textarea"
                label="账号"
                placeholder="请输入你的账号"
                className="login-ac"
                margin="normal"
                onChange={v=>this.handleChange('account',v)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password-input"
                label="密码"
                placeholder="请输入你的密码"
                className="login-ac"
                type="password"
                autoComplete="current-password"
                margin="normal"
                onChange={v=>this.handleChange('pwd',v)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="raised"
                color="primary"
                className="login-btn"
                onClick={()=>this.login()}
              >
                登录
              </Button>
            </Grid>
            <Grid item xs={12}>
              <div className="login-tips">还没有账号？
                <span onClick={()=>this.toRegister()} className="login-re">前往注册</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
  toRegister(){
    this.props.history.push('/register')
  }
  handleChange(key,value){
    this.setState({
      [key]:value.target.value
    })
  }
  login(){
    console.log(this.state);
    console.log(this.state.account);
    console.log(this.state.pwd);
    axios.post('/user/getUser',{})
      .then(res => {
        console.log(res);
      })
  }
}

export default Login;
