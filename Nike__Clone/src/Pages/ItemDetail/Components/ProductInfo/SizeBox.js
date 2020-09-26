import React, { Component } from "react";
import "./SizeBox.scss";

class SizeBox extends Component {
  constructor() {
    super();
    this.state = {
      size: [],
    };
  }

  componentDidMount() {
    fetch("/Data/itemDetail/DetailData.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          size: result.size,
        });
      });
  }

  render() {
    const { size } = this.state;
    const { buttonActive, isActive, current } = this.props;
    return (
      <div className={isActive ? "SizeBox SizeBoxRed " : "SizeBox"}>
        {size.map((el, index) => (
          <div
            key={index}
            className={el.isActive ? "eachSize" : "disabledSize"}
          >
            <button
              onClick={(event) => {
                buttonActive(index, event);
              }}
              className={current === index ? "focus" : ""}
            >
              {el.size}
            </button>
          </div>
        ))}
        <div className={isActive ? "textDis" : "textNone"}>
          <span>사이즈를 선택해 주세요</span>
        </div>
      </div>
    );
  }
}

export default SizeBox;
