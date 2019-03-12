import React from 'react'
const CardUi = props => {
  return (
    <div>
      <div className='row'>
        <div className='col s12 m7'>
          <div className='card'>
            <h1 className='title'>
              {props.title}
              <a
                className='btn-floating btn waves-effect waves-light blue'
                href='#!'
                onClick={props.clickTrigger}
              >
                <i className='material-icons'>add</i>
              </a>
            </h1>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default CardUi
