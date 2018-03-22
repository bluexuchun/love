import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

class Index extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  render () {
    return (
      <div className="test">
        <div className="test-child">这是首页</div>
      </div>
    )
  }
}

export default Index;
