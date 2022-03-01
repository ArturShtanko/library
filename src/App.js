
import React from "react";
import './App.css';

import Navbar from "./components/navbar/navbar";
import BookList from "./components/book_list/book-list";
import AboutUs from "./components/about_us/about-us";
import Contacts from "./components/contacts/contacts";

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="wrapper-app">
      <BrowserRouter>
        <Navbar/>
        <div className="wrapper-app-content">
          <Route exact path='/books' component={BookList} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/contacts' component={Contacts} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
