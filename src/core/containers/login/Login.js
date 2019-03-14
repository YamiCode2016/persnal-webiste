import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Login.css'
import { login } from '../../../store/actions/authAction'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.login({ email: this.state.email, password: this.state.password })
  }

  inputChangeHandler = event => {
    if (event && event.target) {
      this.setState({
        [event.target.getAttribute('name')]: event.target.value
      })
    }
  }

  render () {
    return (
      (this.props.firebase.auth.uid)?<Redirect to='/admin' />:<main className='login-main'>
        <div className='login-cnt'>
          <div className='login'>
            <h1 className='title'>SIGN IN</h1>
            <form className='form' method='POST' onSubmit={this.onSubmit}>
              <div className='field'>
                <label>EMAIL</label>
                <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  className='input-text'
                  onChange={this.inputChangeHandler}
                  value={this.state.email}
                />
              </div>
              <div className='field'>
                <label>PASSWORD</label>
                <div className='relative'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='input-text'
                    id='inputPassword'
                    onChange={this.inputChangeHandler}
                    value={this.state.password}
                  />
                </div>
              </div>
              <div className='field'>
                <button
                  type='submit'
                  className='no-style sign-in'
                  onClick={this.onSubmit}
                >
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: credentails => dispatch(login(credentails))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
