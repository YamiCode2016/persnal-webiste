import React from 'react'
import './Personal.css'
import { DateToString } from '../../../../helpers/dateHelpers';
const Personal = props => {
  return (
    <ul className='timeline'>
      {props.personal
        ? props.personal.map(item => (
          <li key={item.name}>
            <p className='mini-head'>
              <a href={item.link} target="__blank">
                {item.name}{' '}
                <i className='fa fa-external-link' aria-hidden='true' />
              </a>
            </p>
            <p className='p'>{item.description}</p>
            <p className='date'>{DateToString(new Date(item.date.seconds*1000))}</p>
          </li>
        ))
        : null}
    </ul>
  )
}

export default Personal
