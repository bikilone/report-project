import React  from "react";

import { NavLink } from "react-router-dom";

import "./header.css"

export default function Header() {
    
        return (
            <div className="header">
                <div>Reports Administration</div>
                <div>
                    <button >Reports</button>
                    <button >Create report</button >
                </div>
            </div>
        )
    }
