import React from "react";

import "./candidateList.css";

import Candidate from "./candidate";

import Search from "../../partials/search"

export default function CandidateList() {
    return (
        <div className="candidate-list">
        <Search />
        <div className="list">
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        <Candidate/>
        </div>
        <button className="next"> 
            Next
        </button>
        </div>
    )
}