import React, { Component } from "react";
import "./SelectSize.scss";
class SelectSize extends Component {
  render() {
    return (
      <div className="SelectSize">
        <div className="sizeText">
          <div className="sizeSelect">
            <span>
              <strong> 사이즈 선택</strong>
            </span>
          </div>
          <div className="sizeGuide">사이즈 가이드</div>
        </div>
      </div>
    );
  }
}

export default SelectSize;
