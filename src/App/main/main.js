import React, { Component } from "react";

import Search from "../partials/search";
import Report from "../main/component/report";
import Modal from "./component/modal"

import "./main.css";

export default class Main extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            modalStyle: "none"
        }
  
    }
   openModal = ()=> {
        this.setState({
            modalStyle: "block"
        })
   }
   
   closeModal = (e) => {
       if (e.target.id === "modal" || e.target.id === "closeBtn" )
       this.setState({
           modalStyle: "none"
       })
   }

    
   render() {
  
      
      return(
          <div className="main">
          <Search/>
          <Modal closeModal={this.closeModal} modalStyle={this.state.modalStyle}/>
          <Report openModal={this.openModal}/>
          <Report/>
          <Report/>
          <Report/>
          <Report/>
          <Report/>
          <Report/>
          </div>
      )
  }
}