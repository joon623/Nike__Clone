import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Cart.scss";
import RecommendItem from "../RecommendItem/RecommendItem";
import GoToTop from "../GoToTop/GoToTop";

const Cart = () => {
  const [haveItems, setItems] = React.useState(true);

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
            <div className="eachList">
              <div className="imgAndInformation">
                <img src="/images/MenShoes/NikeAirForce107.jpg" alt="product" />
                <div className="productInfo">
                  <div className="name">
                    <span>나이키 대한민국 이그나이트 숏슬리브 티</span>
                  </div>
                  <div className="style">
                    <span>스타일: CV2235-100</span>
                  </div>
                  <div className="size">
                    <span>사이즈: 100(L)</span>
                  </div>
                  <div className="quantity">
                    <span>수량: 1</span>
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
                      <span>45,000원</span>
                    </div>
                    <div className="discountedPrice">
                      <span>36,000원</span>
                    </div>
                  </div>
                  <div className="deleteButton">
                    <i class="fas fa-times"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="orderScheduledAmount">
            <h2>주문예정금액</h2>
            <div className="CommodityAmount">
              <span>삼품금액</span>
              <div>
                <span>45,000원</span>
                <span>36,000원</span>
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
              <span>36,000원</span>
            </div>
            <div className="orderingButton">
              <button>
                <span>주문하기</span>
              </button>
            </div>
          </div>
        </div>
        <div className={haveItems ? "emptyCart" : "emptyCart hideEmptyCart"}>
          <div className="Content">
            <img src="/images/Cart/cart-148964_1280.png" alt="cartImg" />
            <div>
              <span>장바구니에 담긴 상품이 없습니다.</span>
            </div>
            <Link to="/">
              <button className="goBackShopping">
                <span>계속 쇼핑하기</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <RecommendItem />
      <GoToTop />
      <Footer />
    </>
  );
};

export default Cart;
