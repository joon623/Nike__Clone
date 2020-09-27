import React, { Component } from "react";
import ShoppingBasket from "../ShoppingBasket";
import WaitModal from "../../../../Components/WaitModal/WaitModal";
import "./Purchase.scss";

class Purchase extends Component {
  render() {
    const {
      goToBasket,
      clicked,
      goToDetail,
      style,
      quantity,
      price,
      size,
      name,
      detailImage,
      floatWaitModal,
      modalWait,
      allMount,
      deleteBasketItem,
      basketItems,
      filteredItems,
    } = this.props;
    return (
      <div className="Purchase">
        <div className="purchaseButton">
          <button className="directBuy">
            <span>바로구매</span>
          </button>
        </div>
        <div className="basketNwishList">
          <button className="basket" onClick={() => goToBasket()}>
            장바구니
          </button>
          <button className="basket">
            위시리스트 <i className="far fa-heart" />
          </button>
        </div>
        <ShoppingBasket
          style={style}
          quantity={quantity}
          clicked={clicked}
          goToDetail={goToDetail}
          price={price}
          size={size}
          name={name}
          detailImage={detailImage}
          storeData={this.storeData}
          allMount={allMount}
          deleteBasketItem={deleteBasketItem}
          filteredItems={filteredItems}
        />
        <WaitModal modalWait={modalWait} floatWaitModal={floatWaitModal} />
      </div>
    );
  }
}

export default Purchase;
