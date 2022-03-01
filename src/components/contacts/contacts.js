
import React from "react";
import './contacts.css';

import Contact from "./contact/contact";

function Contacts(){
    return(
        <div className="wrapper-contacts">
            <Contact name="Address" value="United States, PA, 12345 Street Avenue, 00000" />
            <Contact name="Phone" value="+12345678910-420" />
            <Contact name="Email" value="emailyemail@email.org" />
        </div>
    );
}

export default Contacts;