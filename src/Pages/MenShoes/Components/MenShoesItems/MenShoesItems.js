import React, { Component } from "react";
import MenShoesShoes from "./Components/MenShoesShoes";
import { productAPI } from "../../../../config";
import { listMockData } from "../../../../config";
import "./MenShoesItems.scss";

class MenShoesItems extends Component {
  constructor() {
    super();

    this.state = {
      shoesList: [],
    };
  }

  componentDidMount() {
    fetch(`${listMockData}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          shoesList: res.shoes,
        });
      });
  }

  render() {
    const { shoesList } = this.state;
    const { showSideBar, scrolled, filteredColor, targetValue } = this.props;
    const colorFilter = shoesList.filter((shoes) => {
      return shoes.color === filteredColor.name || !filteredColor.name;
    });
    return (
      <div className={showSideBar ? "MenShoesItems" : "MenShoesItems isActive"}>
        <MenShoesShoes
          scrolled={scrolled}
          colorFilter={colorFilter}
          targetValue={targetValue}
        />
      </div>
    );
  }
}

export default MenShoesItems;
