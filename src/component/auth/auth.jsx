import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Auth extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  componentDidMount() {
    this.props.history.push('/login')
  }
  render () {
    return null
  }
}

export default withRouter(Auth);
