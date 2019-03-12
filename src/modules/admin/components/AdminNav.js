import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminNav = props => {
  return (
    <nav className='black'>
      <div className='nav-wrapper'>
        <div className='col s12'>
          <a href='/' className='brand-logo'>
            Zemouri Badr
          </a>
          <ul className='black right hide-on-med-and-down'>
            <li>
              <NavLink to='/admin/social'>Social</NavLink>
            </li>
            <li>
              <NavLink to='/admin/projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/admin/experiences'>Experiences</NavLink>
            </li>
          </ul>
          <ul
            id='nav-mobile'
            className='side-nav'
            style={{ transform: 'translateX(-100%)' }}
          >
            <li to='/admin/social'>
              <NavLink to='/admin/social'>Social</NavLink>
            </li>
            <li>
              <NavLink to='/admin/projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/admin/experiences'>Experiences</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default AdminNav
