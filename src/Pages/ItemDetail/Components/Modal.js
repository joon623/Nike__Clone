import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    const { modal, handleModal, detailImage } = this.props;
    return (
      <div className={modal ? "activeModal" : "noModal"} onClick={handleModal}>
        {detailImage?.map((el, idx) => (
          <img id={`modal${idx}`} key={idx} src={el} alt="DetailImage" />
        ))}
        <img
          src="/images/ItemDetail/cross.png"
          alt="exitImage"
          className="exit"
        />
      </div>
    );
  }
}

export default Modal;
