import React from "react";


import "./steps.css"

export default function Steps(props) {


   const changeUrl = (path) => {
     props.url.push(path);
      
    }
    return (
        <ol className="ol">
            <li>Select Candidate</li>
            <li onClick={()=>{changeUrl("/wizzard/companies")}}>Select Company</li>
            <li>Fill Report Details</li>
        </ol>
    )
}