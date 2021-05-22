import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage.js";
import ThankYou from "./Thank-you.js";

function App() {
  return (
    <div className="App bg-gray-900 h-full max-h max-w">
    <BrowserRouter>
    <Switch>
    <Route path="/" component={HomePage} exact/>
    <Route path="/thanks" component={ThankYou}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
