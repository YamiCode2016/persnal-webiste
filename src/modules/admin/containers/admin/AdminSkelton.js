import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AdminNav from '../../components/AdminNav'
import SocialList from '../social/SocialList'
import './AdminSkelton.css'
import ConnectedAdmin from '../../hocs/ConnectedAdmin'
const AdminSkelton = props => {
  return (
    <ConnectedAdmin>
      <AdminNav />
      <div className='admin'>
        <Switch>
          <Route path='/admin/social' exact component={SocialList} />
          <Route path='/admin' exact component={SocialList} />
          <Redirect to='/admin' />
        </Switch>
      </div>
    </ConnectedAdmin>
  )
}
export default AdminSkelton
