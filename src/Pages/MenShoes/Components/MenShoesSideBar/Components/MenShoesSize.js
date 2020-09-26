import React, { Component } from "react";
import "./MenShoesSize.scss";

class MenShoesSize extends Component {
  render() {
    const { isActive, sizeList } = this.props;
    return (
      <div className="MenShoesSize">
        <div className={isActive ? "shoesSizeList isActive" : "shoesSizeList"}>
          {sizeList.map((size, idx) => {
            return (
              <label key={idx}>
                <span>{size}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}
export default MenShoesSize;
