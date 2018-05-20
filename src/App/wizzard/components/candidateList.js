import React from "react";

import "./candidateList.css";

import Candidate from "./candidate";
import Search from "../../partials/search";
import ButtonNext from "../../partials/buttonNext";


export default function CandidateList() {
    return (
        
        <div>
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
        <ButtonNext/>
        </div>
    )
}