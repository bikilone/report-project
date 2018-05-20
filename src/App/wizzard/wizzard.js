import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Steps from "./components/steps";
import CandidateList from "./components/candidateList";
import Search from "../partials/search";
import CompanyList from "./components/companyList";


export default class Wizzard extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <React.Fragment>
        <Steps url={this.props.history}/>      
         <div className="candidate-list">
        <Search />

        <Switch>
            <Route exact path="/wizzard" component={CandidateList}/>
            <Route exact path="/wizzard/companies" component={CompanyList}/>
        </Switch>
        </div>
            </React.Fragment>
        )
    }
}