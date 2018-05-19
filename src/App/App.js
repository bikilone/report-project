import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";


import './App.css';
import Header from "./partials/header"
import Main from "./main/main"
import Wizzard from "./wizzard/wizzard"

class App extends Component {
  render() {
    return (
      <div >
        
          <Header/>
          <Switch>
          <Route exact path="/main" component={Main}/>
          <Route path="/wizzard" component={Wizzard}/>
          </Switch>
      
      </div>
    );
  }
}

export default App;
