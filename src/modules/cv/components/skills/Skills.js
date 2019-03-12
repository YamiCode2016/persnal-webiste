import React from 'react'
import './Skills.css'
const Skills = props => {
  return (
    <div className='skills'>
      {props.skills
        ? props.skills.map(skill => (
          <div className='flex vertical-align item' key={skill.name}>
            <p className='name'>{skill.name}</p>
            <div style={{flex: "0% 1 0"}}>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: skill.level + '%' }}
                aria-valuenow={skill.level}
                aria-valuemin='0'
                aria-valuemax='100'
              />
            </div>
          </div>
        ))
        : null}
    </div>
  )
}

export default Skills
