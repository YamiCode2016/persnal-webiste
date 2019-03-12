import React from 'react'
import './Social.css'
const Social = props => {
  return (
    <ul className='social'>
      {props.socials
        ? props.socials.map(social => (
          <li key={social.name}>
            <a target='__blank' href={social.link} className="capitalize">
              <i className={social.icon} aria-hidden='true' />{' '}
              {social.textLink}
            </a>
          </li>
        ))
        : null}
    </ul>
  )
}

export default Social
