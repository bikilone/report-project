import React, { Component } from "react";

import Search from "../partials/search";
import Report from "../main/component/report";

import "./main.css";

export default class Main extends Component {
    constructor() {
        super() 
    }
    
  render() {
      return(
          <div className="main">
          <Search/>
          <Report/>
          </div>
      )
  }
}