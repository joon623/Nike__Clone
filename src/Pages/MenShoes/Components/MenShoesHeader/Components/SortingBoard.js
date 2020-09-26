import React, { Component } from "react";
import "./SortingBoard.scss";

class SortingBoard extends Component {
  render() {
    const { isActivated } = this.props;
    return (
      <div className={isActivated ? "SortingBoard isActive" : "SortingBoard"}>
        <p>신상품순</p>
        <p>높은 가격순</p>
        <p>낮은 가격순</p>
      </div>
    );
  }
}

export default SortingBoard;
