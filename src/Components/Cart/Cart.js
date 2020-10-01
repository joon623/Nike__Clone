import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import RecommendItem from "../RecommendItem/RecommendItem";
import GoToTop from "../GoToTop/GoToTop";
import EmptyCart from "./Component/EmptyCart";
import "./Cart.scss";

const Cart = () => {
  const [haveItems, setItems] = useState(true);
  const [basketData, setBasket] = useState([]);
  const [filteredData, setFilter] = useState([]);
  const [AllMount, setAllMount] = useState(0);
  let totalCost = 0;

  useEffect(() => {
    localStorage.getItem("basketData") === "[]" ||
    localStorage.getItem("basketData") === null
      ? setItems(false)
      : setItems(true);
    setBasket(JSON.parse(localStorage.getItem("basketData")));
    document.title = "장바구니 - 나이키";
  }, []);

  useEffect(() => {
    setFilter(basketData);
  }, [basketData]);

  useEffect(() => {
    filteredData &&
      filteredData.forEach((el) => {
        totalCost = totalCost + el?.price * el?.quantity;
      });
    setAllMount(totalCost);
    localStorage.getItem("basketData") === "[]" ||
    localStorage.getItem("basketData") === null
      ? setItems(false)
      : setItems(true);
  }, [filteredData]);

  const deleteItem = () => {
    const deltedData = basketData.filter((el) => {
      return el.willDelete;
    });
    localStorage.setItem("basketData", JSON.stringify(deltedData));
    setFilter(deltedData);
  };

  return (
    <>
      <Nav />
      <div className={haveItems ? "Cart" : "Cart hideCart"}>
        <h2>장바구니</h2>
        <h4>1개 상품</h4>
        <div className="shoppingContent">
          <div className="contentList">
            <div className="delteAll">
              <span>전체삭제</span>
            </div>
            {filteredData?.map((el, idx) => (
              <div key={idx} className="eachList">
                <div className="imgAndInformation">
                  <img src={el?.localImage[0]} alt="product" />
                  <div className="productInfo">
                    <div className="name">
                      <span>{el?.name}</span>
                    </div>
                    <div className="style">
                      <span>스타일: {el?.style}</span>
                    </div>
                    <div className="size">
                      <span>사이즈: {el?.size}</span>
                    </div>
                    <div className="quantity">
                      <span>수량: {el?.quantity}</span>
                    </div>
                    <div className="addWishListAndBuyLater">
                      <div className="addWishList">
                        <span>위시리스트에 추가</span>
                      </div>
                      <div className="buyLater">
                        <span>나중에 구매하기</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="optionAndPrice">
                  <div className="optionChange">
                    <span>옵션 변경</span>
                  </div>
                  <div className="priceContainer">
                    <div className="price">
                      <div className="originalPrice">
                        <span>
                          {(el?.price * el?.quantity).toLocaleString()}원
                        </span>
                      </div>
                    </div>
                    <div className="deleteButton">
                      <i
                        className="fas fa-times"
                        onClick={() => {
                          el.willDelete = false;
                          deleteItem(idx);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="orderScheduledAmount">
            <h2>주문예정금액</h2>
            <div className="CommodityAmount">
              <span>삼품금액</span>
              <div>
                <span>{totalCost.toLocaleString()}원</span>
              </div>
            </div>
            <div className="expectedShip">
              <span>예상 배송비</span>
              <span>0원</span>
            </div>
            <div className="commodityDiscount">
              <span>상품 할인 금액</span>
              <span>0원</span>
            </div>
            <div className="orderDiscount">
              <span>주문 할인 금액</span>
              <span>0원</span>
            </div>
            <div className="totalPayalbeAmount">
              <span>총 결제 예정 금액</span>
              <span>{AllMount.toLocaleString()}원</span>
            </div>
            <div className="orderingButton">
              <button>
                <span>주문하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <EmptyCart haveItems={haveItems} />
      <RecommendItem />
      <GoToTop />
      <Footer />
    </>
  );
};

export default Cart;
