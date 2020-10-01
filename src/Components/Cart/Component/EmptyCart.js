import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCart.scss";

export default function EmptyCart({ haveItems }) {
  return (
    <div className={haveItems ? "EmptyCart hideEmptyCart" : "EmptyCart"}>
      <h2>장바구니</h2>
      <h4>0개 상품</h4>
      <div className="content">
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
  );
}
