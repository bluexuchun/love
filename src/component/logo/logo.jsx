import React from 'react'
import PropTypes from 'prop-types'
import logoImg from '../../pages/images/logo.jpeg';
import './logo.less'
class Logo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logoStyle:{
        height:'14rem'
      }
    }
  }
  componentDidMount() {
    console.log(this.props.setHeight);
    const setHeight = {
      height: this.props.setHeight + 'rem'
    }
    this.setState({
      logoStyle: setHeight
    })
    console.log(setHeight)
    console.log(this.state.logoStyle)
  }
  render () {
    return(
      <div className="logo" style={this.state.logoStyle}>
        <img src={logoImg}></img>
      </div>
    )
  }
}

export default Logo;
