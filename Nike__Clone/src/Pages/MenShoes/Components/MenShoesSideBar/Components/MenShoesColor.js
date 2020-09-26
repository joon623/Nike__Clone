import React, { Component } from "react";
import "./MenShoesColor.scss";

class MenShoesColor extends Component {
  render() {
    const { isActive, colorList, targetValue } = this.props;
    return (
      <div className="MenShoesColor">
        <div
          className={isActive ? "shoesColorList isActive" : "shoesColorList"}
        >
          <ul>
            {colorList.map((color) => {
              return (
                <li key={color.id}>
                  <div
                    className={color.color}
                    onClick={() => targetValue(color)}
                  ></div>
                  <div className="name">{color.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default MenShoesColor;
