import React, { Component } from "react";
import "./IPAddress.css";

class IPAddress extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>{this.props.ip}</h1>
        <hr />
        <h2>{this.props.region}</h2>
        <h2>{this.props.country}</h2>
        <h3>{this.props.postal}</h3>
        <p>( This is your IP address......probably :P )</p>
      </div>
    );
  }
}

export default IPAddress;
