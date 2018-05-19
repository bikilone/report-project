import React, { Component } from 'react';

import './App.css';
import Header from "./partials/header"
import Main from "./main/main"

class App extends Component {
  render() {
    return (
      <div >
        
          <Header/>
          <Main/>
      </div>
    );
  }
}

export default App;
