
import React from "react";
import './contact.css';

function Contact(props){
    return(
        <div className="wrapper-contact">
            <span id="name">{props.name}</span>
            <span id="value">{props.value}</span>
        </div>
    );
}

export default Contact;