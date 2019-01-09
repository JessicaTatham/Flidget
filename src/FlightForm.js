import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class FlightForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      depart: '',
      return: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });  
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    let url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + "" + this.state.from + "-sky/" + this.state.to + "-sky/" + this.state.depart + "?inboundpartialdate=" + this.state.return;
    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "68b704a9f9msh44d856a939f24c2p16b334jsnab17216dcec3"
      }
    })
    .then(results => {
      console.log(results.json())
      return results.json();
    })
  }


  render() {
    var aYearFromNow = new Date();
    aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          From:
          <input type="text" name="from" value={this.state.from} onChange={this.handleChange} required></input>
        </label>

        <label>
          To:
          <input type="text" name="to" value={this.state.to} onChange={this.handleChange} required></input>
        </label>

        <label>
          Depart:
          <input type="date" min={new Date()} max={aYearFromNow} name="depart" value={this.state.depart} onChange={this.handleChange} required></input>
        </label>

        <label>
          Return:
          <input type="date" name="return" value={this.state.return} onChange={this.handleChange} required></input>
        </label>

        <input type="submit" value="Search for flights" ></input>
      </form>
    );
  }
}

export default hot(module)(FlightForm);
