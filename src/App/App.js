import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";


import './App.css';
import Header from "./partials/header"
import Main from "./main/main"
import Wizzard from "./wizzard/wizzard"

class App extends Component {

  render() {
    return (
      <div >
        
          <Header url={this.props.history}/>

          <Switch>
          <Route path="/main" component={Main}/>
          <Route path="/wizzard" component={Wizzard}/>
          {/* <Redirect from="/" to="/main" component={Main}/>   */}
          </Switch>
      
      </div>
    );
  }
}

export default withRouter(App);
