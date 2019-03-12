import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  deleteSocial,
  getSocial,
  addSocial,
  putSocial
} from '../../../../store/actions/socialAction'
import CardUi from '../../hocs/CardUi'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import MyModal from '../../../../core/hocs/AddModal';

class SocialList extends Component {
  $ = window.jQuery;
  state = {
    open: false
  }
  onAdd = () => {
    this.$('#modal').modal('open')
  }

  render () {
    return (
      <CardUi title='Social List' clickTrigger={this.onAdd}>
        <table className='striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Icon</th>
              <th>Text Link</th>
              <th>Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.socials
              ? this.props.socials.map(social => (
                <tr key={social.name}>
                  <td>{social.name}</td>
                  <td>{social.icon}</td>
                  <td>{social.linkText}</td>
                  <td>{social.link}</td>
                  <td>
                    <button
                      onClick={() => this.props.getPost(social.name)}
                      className='actions btn-floating btn small waves-effect waves-light green'
                    >
                      <i className='material-icons'>mode_edit</i>
                    </button>
                    <button
                      onClick={() => this.props.deletePost(social.name)}
                      className='actions btn-floating btn small waves-effect waves-light red'
                    >
                      <i className='material-icons'>clear</i>
                    </button>
                  </td>
                </tr>
              ))
              : null}
            <tr />
          </tbody>
        </table>
        <MyModal id="modal" header="New Social">Lorem ipsum dolor sit amet</MyModal>
      </CardUi>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let socials = []
  if (state.firestore && state.firestore.data && state.firestore.data.socials) {
    socials = Object.keys(state.firestore.data.socials).map(key => {
      return { id: key, ...state.firestore.data.socials[key] }
    })
  }
  return {
    socials: socials
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deleteSocial(id)),
    getPost: id => dispatch(getSocial(id)),
    addPost: data => dispatch(addSocial(data)),
    putPost: () => dispatch(putSocial())
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: 'socials'
    }
  ])
)(SocialList)
