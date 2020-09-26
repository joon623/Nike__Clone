import React, { Component } from "react";
import "./ShoppingBasket.scss";

class ShoppingBasket extends Component {
  render() {
    const {
      clicked,
      goToDetail,
      localBasketData,
      allMount,
      deleteBasketItem,
      basketItems,
      filteredItems,
    } = this.props;
    return (
      <div
        className={clicked ? "ShoppingBasket basketActive" : "ShoppingBasket"}
      >
        <div className="noContent" onClick={goToDetail} />
        <div className="container">
          <header className="header">
            <span>미니 장바구니</span>
          </header>
          <div className="shoppingContentContainer">
            {filteredItems?.map((el, idx) => {
              return (
                <section key={idx} className="shoppinngContent">
                  <img src={el.localImage?.[0]} alt="selectedImg" />
                  <div className="detailContent">
                    <div className="name">
                      <span>{el.name}</span>
                    </div>
                    <div className="style">
                      <span>스타일: {el.style}</span>
                    </div>
                    <div className="size">
                      <span>사이즈: {el.size}</span>
                    </div>
                    <div className="quantity">
                      <span>수량: {el.quantity}</span>
                    </div>
                    <div className="price">
                      <span>{(el.price * el.quantity).toLocaleString()}원</span>
                    </div>
                  </div>
                  <div className="exitButton">
                    <i
                      className="fas fa-times"
                      onClick={() => {
                        el.willDelete = !el.willDelete;
                        deleteBasketItem();
                      }}
                    ></i>
                  </div>
                </section>
              );
            })}
          </div>
          <section className="lastCheck">
            <div className="allMount">
              <div className="allMountText">
                <span>총 상품금액</span>
              </div>
              <div className="allMountNumber">
                <span>{allMount?.toLocaleString()} 원</span>
              </div>
            </div>
            <div className="recipt">
              <span>배송비는 주문서에서 확인이 가능합니다.</span>
            </div>
            <div className="button">
              <button className="goToBasket">
                <span>장바구니 가기</span>
              </button>
              <button className="buy">
                <span>바로구매</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ShoppingBasket;
