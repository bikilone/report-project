import React from "react";

import "./modal.css"

export default function Modal(props) {
    
const style = {
    display: props.modalStyle
}
    return (
        <div id="modal" style={style} onClick={props.closeModal}>
        <div id="modal-content">
            <div id="modal-header">
                <span id="closeBtn">&times;</span>
                <h1>Random Name</h1>
            </div>
            <div id="modal-body">
                <div>
                    <div>
                        <h4>Company</h4>
                        <h5>Google</h5>
                    </div>
                    <div>
                        <h4>interview Date</h4>
                        <h5>2/3/2015</h5>
                    </div>
                    <div>
                        <h4>Phase</h4>
                        <h5>Tehnical interview</h5>
                    </div>
                    <div>
                        <h4>Status</h4>
                        <h5>Passed</h5>
                    </div>
                
                </div>
                <div>
                    <h4>Notes</h4>
                    <p>jklasdjkljklsdklasdkjljklasdfjk;ldjkaslsdklasdjkljklsdklasdkjljklasdfjk;ldjkaslsklasdjkljklsdklasdkjljklasdfjk;ldjkaslsklasdjkljklsdklasdkjljklasdfjk;ldjkasls</p>
                </div>
            </div>
            </div>
        </div>
    )
} 