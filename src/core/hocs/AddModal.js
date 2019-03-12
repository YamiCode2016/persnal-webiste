import React from 'react'
import {Modal} from 'react-materialize'
const MyModal = props => {
  return (
    <Modal id={props.id} header={props.header}>
        {props.children}
    </Modal>
  )
}
export default MyModal
