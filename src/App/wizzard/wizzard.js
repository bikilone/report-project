import React, { Component } from "react";

import Steps from "./components/steps";
import CandidateList from "./components/candidateList";


export default class Wizzard extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <React.Fragment>
        <Steps/>
        <CandidateList>
        </CandidateList>
            </React.Fragment>
        )
    }
}