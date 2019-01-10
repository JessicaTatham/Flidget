import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class Quote extends Component {
	constructor(props) {
	    super(props);
	}

  render(){
    return(
      <div className="quote">
      	<p> $ {this.props.data.MinPrice}</p>
      </div>
    );
  }
};

export default hot(module)(Quote);
