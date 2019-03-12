import React from 'react'
import './Experience.css'
import { DateToString } from '../../../../helpers/dateHelpers';
const Experience = props => {
  return (
    <ul className='timeline mgb-50'>
      {props.experiences
        ? props.experiences.map((experience) => (
          <li key={experience.name}>
            <p className='mini-head mgb-5'>{experience.name} <i className="fa fa-info-circle" aria-hidden="true"></i></p>
            <p className='date mgb-20'> {DateToString(new Date(experience.dateFrom.seconds*1000))} - {(experience.isEnded)?DateToString(new Date(experience.dateTo.seconds*1000)):"Present"}</p>
            <p className='p'>{experience.description}
            </p>
          </li>
        ))
        : null}
    </ul>
  )
}

export default Experience
