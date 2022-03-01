
import React from "react";
import './book-slot.css';

function BookSlot(props){
    return(
        <div className="wrapper-book-slot">
            <img id="cover" src={props.imagePath}></img>
            <h3 id="title">{props.title}</h3>
        </div>
    );
}

export default BookSlot;