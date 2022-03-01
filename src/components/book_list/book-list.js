
import React from "react";
import './book-list.css';

import BookSlot from "./book_slot/book-slot";

function BookList(){
    return(
        <div className="wrapper-book-list">
            <BookSlot imagePath="images/1.png" title="Harry Potter and the Philosopher's Stone" />
            <BookSlot imagePath="images/2.png" title="Harry Potter and the Chamber of Secrets" />
            <BookSlot imagePath="images/3.png" title="Harry Potter and the Prisoner of Azkaban" />
            <BookSlot imagePath="images/4.png" title="Harry Potter and the Goblet of Fire" />
            <BookSlot imagePath="images/5.png" title="Harry Potter and the Order of a Phoenix" />
            <BookSlot imagePath="images/6.png" title="Harry Potter and the Half-Blood Prince" />
            <BookSlot imagePath="images/7.png" title="Harry Potter and the Deathly Hallows" />
            <BookSlot imagePath="images/8.png" title="War and Peace" />
            <BookSlot imagePath="images/9.png" title="Anna Karenina" />
        </div>
    );
}

export default BookList;