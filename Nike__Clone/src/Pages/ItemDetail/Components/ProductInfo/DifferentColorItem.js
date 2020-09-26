import React, { Component } from "react";
import "./DifferentColorItem.scss";

class DifferentColorItem extends Component {
  constructor() {
    super();
    this.state = {
      differentColor: [],
    };
  }

  componentDidMount() {
    fetch("/Data/itemDetail/DetailData.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          differentColor: result.differentColor,
        });
      });
  }

  render() {
    const { differentColor } = this.state;
    return (
      <div className="DifferentColorItem">
        {differentColor.map((el) => (
          <div>
            <img alt="differentItem" src={el} />
          </div>
        ))}
      </div>
    );
  }
}

export default DifferentColorItem;
