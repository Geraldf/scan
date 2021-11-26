import React, { Component } from "react";
import QrReader from "react-qr-reader";
import "./QrTest.css";

class QrTest extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      const { Name, Dataum, Checksumme } = data;
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div className="container">
        <QrReader
          delay={300}
          facingMode="user"
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "30%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QrTest;
