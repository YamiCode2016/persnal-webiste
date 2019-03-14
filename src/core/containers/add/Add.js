import React, { Component, createRef } from 'react'
import MyModal from '../../hocs/MyModal'
import { Row, Input } from 'react-materialize'
class Add extends Component {
  state = {
    forms: [],
    values: {}
  }
  constructor (props) {
    super(props)
    this.childRef = createRef()
  }
  $ = window.jQuery
  openModal = (obj = { forms: [], values: {} }) => {
    this.setState({ forms: obj.forms, values: obj.values })
    if (this.childRef) {
      this.childRef.current.openModal()
    }
  }

  onSaveClick = () => {
    this.props.onAdd(this.state.values)
  }

  inputChangeHandler = event => {
    if (event && event.target) {
      this.setState({
        values: {
          ...this.state.values,
          [event.target.getAttribute('name')]: event.target.value
        }
      })
    }
  }

  render () {
    return (
      <MyModal
        id='modal'
        header={this.props.header}
        hasSaveButton
        onSaveClick={this.onSaveClick}
        ref={this.childRef}
      >
        <Row>
          {this.state.forms.map(form => {
            switch (form.type) {
              case 'text':
                let value =
                  this.state.values && this.state.values[form.name]
                    ? this.state.values[form.name]
                    : ''
                return (
                  <Input
                    name={form.name}
                    s={12}
                    label={form.placeHolder}
                    key={form.name}
                    defaultValue={value}
                    onChange={this.inputChangeHandler}
                  />
                )
              case 'number':
                return (
                  <Input
                    s={12}
                    label={form.placeHolder}
                    key={form.name}
                    type='number'
                  />
                )
              default:
                return null
            }
          })}
        </Row>
      </MyModal>
    )
  }
}

export default Add
