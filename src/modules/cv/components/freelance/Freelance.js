import React from 'react'
import { DateToString } from '../../../../helpers/dateHelpers'
const FreeLance = props => {
  return (
    <ul className='timeline mgb-50'>
      {props.experiences
        ? props.experiences.map(experience => (
          <li key={experience.name}>
            <p className='mini-head mgb-5'>{experience.name}</p>
            <p className='date mgb-20'>
              {' '}
              {DateToString(new Date(experience.date.seconds * 1000))}
            </p>
            <p className='p'>{experience.description}</p>
          </li>
        ))
        : null}
    </ul>
  )
}

export default FreeLance
