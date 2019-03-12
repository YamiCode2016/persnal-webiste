import React from 'react'
import './Education.css'
const Education = props => {
  return (
    <div className='row'>
      {props.educations
        ? props.educations.map(education => (
          <div className='col-sm-6' key={education.name}>
            <p className='flex between vertical-align experience'>
              <span className='number'>{education.yearStart} - {education.yearEnd}</span>
              <span className='text'>{education.name}</span>
            </p>
            <p className='description'>{education.description} - {education.school}</p>
          </div>
        ))
        : null}
    </div>
  )
}

export default Education
