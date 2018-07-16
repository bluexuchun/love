import React from 'react'
import PropTypes from 'prop-types'
import './register.less'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Logo from '../../component/logo/logo'
import Grid from 'material-ui/Grid';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      account: '',
      pwd: '',
      apwd: '',
      yzm: ''
    }
  }
  render () {
    return (
      <div className="register">
        <Logo setHeight="14"></Logo>

        <div className="register-content">
          <Grid container className="register-form">
            <Grid item xs={12}>
              <TextField
                id="textarea"
                label="手机号"
                placeholder="请输入手机号"
                className="register-ac"
                margin="normal"
                onChange={v=>this.handleChange('account',v)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="textarea"
                label="密码"
                placeholder="请输入密码"
                className="register-ac"
                margin="normal"
                onChange={v=>this.handleChange('pwd',v)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="textarea"
                label="再次确认密码"
                placeholder="请输入密码"
                className="register-ac"
                margin="normal"
                onChange={v=>this.handleChange('apwd',v)}
              />
            </Grid>
            <Grid item xs={12}>
              <div className="register-msg">
                <TextField
                  id="textarea"
                  placeholder="请输入验证码"
                  className="register-ac"
                  margin="normal"
                  onChange={v=>this.handleChange('yzm',v)}
                />
                <Button variant="raised" color="primary" className="register-btn" >
                  发送验证码
                </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="register-btngroup">
                <Button variant="raised" color="primary" className="submit-btn">
                  注册
                </Button>
                <Button variant="raised" className="back-btn" onClick={()=>this.back()}>
                  返回
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
  back(){
    this.props.history.push('/login')
  }
}

export default Register;
