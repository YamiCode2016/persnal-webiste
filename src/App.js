import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './modules/cv/containers/home/Home';
import AdminSkelton from './modules/admin/containers/admin/AdminSkelton';
import C404 from './core/containers/C404/C404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route path="/admin" component={AdminSkelton} />
          <Route path="/" exact component={Home} />
          <Route path="/404" exact component={C404} />
          <Redirect to="/404"/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
