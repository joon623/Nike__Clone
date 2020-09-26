import React, { Component } from "react";
import "./DetailCategoryNprice.scss";

class DetailCategoryNprice extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      enviromentFriendly: false,
    };
  }

  componentDidMount() {
    fetch("/Data/itemDetail/DetailData.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          category: result.category,
          enviromentFriendly: result.enviromentFriendly,
        });
      });
  }

  render() {
    const { category, enviromentFriendly } = this.state;
    const { price, name } = this.props;
    return (
      <div className="DetailCategoryNprice">
        <div className="categoryNprice">
          <div className="category">
            <span>{category}</span>
          </div>
          <div className="price">
            <span>
              <strong>{price.toLocaleString()}원</strong>
            </span>
          </div>
        </div>
        <h1 className="itemName">{name}</h1>
        <div className="enviromentFriendly">
          <span>{enviromentFriendly && "친환경 소재"}</span>
        </div>
      </div>
    );
  }
}

export default DetailCategoryNprice;
