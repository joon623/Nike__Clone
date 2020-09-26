import React, { Component } from "react";
import Modal from "./Modal";
import "./DetailImages.scss";

class DetailImages extends Component {
  render() {
    const { detailImage, modal, handleModal } = this.props;
    return (
      <section className="DetailImages">
        <ul className="imageList">
          {detailImage?.map((el, index) => (
            <li key={index}>
              <a href={`#modal${index}`}>
                <img
                  alt="detailItemImage"
                  src={el}
                  onClick={() => {
                    handleModal(index);
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
        <Modal
          handleModal={handleModal}
          modal={modal}
          detailImage={detailImage}
        />
      </section>
    );
  }
}

export default DetailImages;
