import React  from "react";

import { NavLink } from "react-router-dom";

import "./header.css"

export default function Header(props) {
    
        return (
            <div className="header">
                <div>Reports Administration</div>
                <div>
                    <button onClick={()=>props.url.push("/main")}>Reports</button>
                    <button onClick={()=>props.url.push("/wizzard")}>Create report</button >
                </div>
            </div>
        )
    }
