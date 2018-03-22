import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue'
import Index from './pages/index/index'
import Mine from './pages/mine/mine'
import Auth from './component/auth/auth'
import Login from './pages/login/login'
import Register from './pages/register/register'
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension () : f=>f
// const store = createStore()

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[300],
      dark: blue[600],
      contrastText: '#fff',
    },
  },
});

ReactDOM.render(
  (<Provider>
    <BrowserRouter>
      <MuiThemeProvider theme = {theme}>
        <div>
          <Auth></Auth>
          <Switch>
            <Route path="/index" component={Index}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>)
   , document.getElementById('root'));
registerServiceWorker();
