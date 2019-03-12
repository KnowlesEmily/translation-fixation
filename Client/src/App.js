import React from 'react';
import NavBar from "./NavBar";
import Home from "./Home"
import Languages from "./Languages";
import LanguageDetail from './LanguageDetail';
import Contact from "./Contact";
import Submitted from "./Submitted";
import "./App.css";
import {Switch, Route} from "react-router-dom"

const App = () => {
  return (
    <div className="background">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/languages" component={Languages}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="/languages/:_id" component={LanguageDetail}/>
        <Route path="/contact/submitted" component={Submitted}/>
      </Switch>
    </div>
  );
};

export default App;