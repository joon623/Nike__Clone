import React, { Component } from "react";
import "./ItemInfo.scss";

class ItemInfo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      style: "",
      color: "",
    };
  }

  render() {
    const { style, title, content, color } = this.props;
    return (
      <div className="ItemInfo">
        <div className="mainCopy">{title}</div>
        <div className="content">{content}</div>
        <div className="colorNstyle">
          <span className="color">{color}</span>
          <span className="style">스타일 : {style}</span>
          <span>더 보기 </span>
        </div>
      </div>
    );
  }
}

export default ItemInfo;
