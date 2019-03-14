import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import {
  addItemToFirebase,
  removeItemFromFirebase,
  updateItemFromFirebase
} from '../../../../store/actions/firebaseAction'
import CardUi from '../../hocs/CardUi'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Add from '../../../../core/containers/add/Add'
import { generateObjFromForm } from '../../../../helpers/inputHelpers'

class SocialList extends Component {
  constructor (props) {
    super(props)
    let forms = [
      { name: 'icon', type: 'text', placeHolder: 'Icon', required: true },
      { name: 'name', type: 'text', placeHolder: 'Name', required: true },
      { name: 'link', type: 'text', placeHolder: 'Link', required: true },
      {
        name: 'textLink',
        type: 'text',
        placeHolder: 'Link text',
        required: true
      }
    ]
    this.state = {
      form: {
        forms: forms
      }
    }
    this.childRef = createRef()
  }
  onAddClick = () => {
    if (this.childRef) {
      this.childRef.current.openModal({
        forms: this.state.form.forms,
        values: generateObjFromForm(this.state.form.forms)
      })
    }
  }

  onPutClick = obj => {
    if (this.childRef) {
      this.childRef.current.openModal({
        forms: this.state.form.forms,
        values: { ...obj }
      })
    }
  }

  onAddModalTrigger = obj => {
    if (!obj.id) {
      this.props.addPost({ ...obj })
    } else {
      this.props.putPost({ ...obj })
    }
  }

  render () {
    return (
      <CardUi title='Social List' clickTrigger={this.onAddClick}>
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
                <tr key={social.id}>
                  <td>{social.name}</td>
                  <td>{social.icon}</td>
                  <td>{social.textLink}</td>
                  <td>{social.link}</td>
                  <td>
                    <button
                      onClick={() => this.onPutClick(social)}
                      className='actions btn-floating btn small waves-effect waves-light green'
                    >
                      <i className='material-icons'>mode_edit</i>
                    </button>
                    <button
                      onClick={() => this.props.removePost(social)}
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
        <Add
          ref={this.childRef}
          id='modal'
          header='New Social'
          onAdd={this.onAddModalTrigger}
        />
      </CardUi>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let socials = []
  if (
    state.firestore &&
    state.firestore.data &&
    state.firestore.data.socials
  ) {
    socials = Object.keys(state.firestore.data.socials).map(key => {
      return { id: key, ...state.firestore.data.socials[key] }
    })
  }
  return {
    socials: socials
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPost: data => dispatch(addItemToFirebase(data, 'socials')),
    removePost: data => dispatch(removeItemFromFirebase(data, 'socials')),
    putPost: data => dispatch(updateItemFromFirebase(data, 'socials'))
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
