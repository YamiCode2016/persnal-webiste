import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Cv from '../cv/Cv';
const Home = (props) =>{
    return (
        <Switch>
          <Route path="/" exact component={Cv} />
          <Redirect to="/404"/>
        </Switch>
    )
}
export default Home;