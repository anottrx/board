import React, { Component } from "react";
import Clock from "react-live-clock";

class LiveClock extends Component {
  render() {
    return (
      <div>
        <Clock format={`YYYY년 MM월 DD일 HH:mm:ss`} ticking={true} />
      </div>
    );
  }
}

export default LiveClock;
