import React, { Component } from 'react'
import { Modal, Button } from 'react-materialize'
class MyModal extends Component {
  $ = window.jQuery
  closeModal = () => {
    this.$('#' + this.props.id).modal('close')
    if (this.props.subscribeToClose) {
      this.props.closeModalCall()
    }
  }
  openModal = () => {
    this.$('#' + this.props.id).modal('open')
  }

  saveClick = () => {
    this.$('#' + this.props.id).modal('close')
    this.props.onSaveClick()
  }

  render () {
    let buttons = []
    if (this.props.hasSaveButton) {
      buttons.push(
        <Button onClick={this.saveClick} className='mgr-20'>
          Save
        </Button>
      )
    }
    buttons.push(<Button onClick={this.closeModal}>Close</Button>)
    return (
      <Modal id={this.props.id} header={this.props.header} actions={buttons}>
        {this.props.children}
      </Modal>
    )
  }
}
export default MyModal
