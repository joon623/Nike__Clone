import React, { Component } from "react";
import "./DisplayWait.scss";

class DisplayWait extends Component {
  render() {
    const { modalValue } = this.props;
    return (
      <div className={modalValue ? "DisplayWait isActive" : "DisplayWait"}>
        <div className="displayBoard">
          <img src="/images/MenShoes/loader.gif" alt="로딩중" />
          <p>처리중 입니다.</p>
        </div>
      </div>
    );
  }
}

export default DisplayWait;
