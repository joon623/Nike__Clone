import React, { Component } from "react";
import "./WaitModal.scss";

export default class WaitModal extends Component {
  render() {
    const { modalWait } = this.props;
    return (
      <div className={modalWait ? "WaitModal WaitModalShow" : "WaitModal"}>
        <div className="whiteSpace">
          <img src="/images/ItemDetail/preloader.gif" alt="preloader" />
          <span>처리중입니다.</span>
        </div>
      </div>
    );
  }
}
