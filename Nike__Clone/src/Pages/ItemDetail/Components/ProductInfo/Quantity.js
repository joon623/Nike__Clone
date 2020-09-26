import React, { Component } from "react";
import ShoppingBasket from "../ShoppingBasket";
import "./Quantity.scss";

class Quantity extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      maxQuantity: 0,
    };
  }

  minus = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({
        quantity: quantity - 1,
      });
    }
  };

  plus = () => {
    const { quantity, maxQuantity } = this.state;
    if (quantity < maxQuantity) {
      this.setState({
        quantity: quantity + 1,
      });
    }
  };

  componentDidMount() {
    fetch("/Data/itemDetail/DetailData.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          maxQuantity: result.maxQuantity,
        });
      });
  }

  componentDidUpdate(preProps, preState) {
    const { quantity } = this.state;
    const { handleQuantity } = this.props;
    if (preState.quantity !== quantity) {
      handleQuantity(quantity);
    }
  }

  render() {
    const { quantity, maxQuantity } = this.state;
    return (
      <div className="Quantity">
        <div
          className={
            quantity === maxQuantity
              ? "checkQuantity checkQuantityRed"
              : "checkQuantity"
          }
        >
          <div className="quantityText">수량</div>
          <div className="count">
            <input type="text" name="quantity" value={quantity} />
          </div>
          <button className="minusButton">
            <i
              className={quantity > 1 ? "fas fa-minus" : "fas fa-minus color"}
              onClick={() => {
                this.minus();
              }}
            />
          </button>
          <button className="plusButton">
            <i
              className="fas fa-plus"
              onClick={() => {
                this.plus();
              }}
            />
          </button>
        </div>
        <div
          className={
            quantity === maxQuantity
              ? "ActiveimpossibleCommand"
              : "impossibleCommand"
          }
        >
          <span>{maxQuantity}개 까지 구매가능 합니다.</span>
        </div>
      </div>
    );
  }
}

export default Quantity;
