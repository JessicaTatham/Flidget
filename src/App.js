import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import FlightForm from "./FlightForm.js";

class App extends Component {

  render(){
  	console.log('made it');
  	console.log(<FlightForm />);
    return(
      <div className="App">
        <FlightForm />
      </div>
    );
  }
};

export default hot(module)(App);
