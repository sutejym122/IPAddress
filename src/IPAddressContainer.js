import React, { Component } from "react";
import IPAddress from "./IPAddress";

var xhr;

class IPAddressContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ip_address: "...",
      country: "xxxx",
      region: "xxxx",
      postal: "...",
    };

    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipinfo.io/json?token=2277ce4bac0347", true);
    xhr.send();

    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);

      this.setState({
        ip_address: response.ip,
        region: response.region,
        country: response.country,
        postal: response.postal,
      });
    }
  }

  render() {
    return (
      <IPAddress
        ip={this.state.ip_address}
        region={this.state.region}
        country={this.state.country}
        postal={this.state.postal}
      />
    );
  }
}

export default IPAddressContainer;
