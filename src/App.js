import React from "react";
import "./App.css";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import AboutUs from "./containers/AboutUs";
import ContactUs from "./containers/ContactUs";
import Details from "./components/Details";

// import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
