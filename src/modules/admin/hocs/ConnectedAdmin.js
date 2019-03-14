import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../../../core/containers/login/Login'

class ConnectedAdmin extends Component {
  render () {
    return (!this.props.firebase.auth.isLoaded)?
    <div className='spinner' />
    :this.props.firebase.auth.uid ? (
      <main>{this.props.children}</main>
    ) : (
      <Login />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(ConnectedAdmin)
