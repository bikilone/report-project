import React from "react";

import "./report.css"

export default function Report(props) {

    return (

        <div className="report">
            <div>
                <h4>Google</h4>
                <h6>Company</h6>
            </div>
            <div>
                <h4>Brian</h4>
                <h6>Candidate</h6>
            </div>
            <div className="last-column">
                <div>
                    <h4>2/3/2016</h4>
                <h6>Interview Date</h6>
                </div>
                <div>
                    <h4>Passed</h4>
                <h6>Status</h6>
                </div>
                <div id="last-div">
                    <h4>icon</h4>
                <h6>x</h6>
                </div>
            </div>
       
        
        </div>
    )
}