import React, { Component } from "react";
import "./Delivery.scss";
class Delivery extends Component {
  constructor() {
    super();
    this.state = {
      isDeliveryShown: false,
    };
  }

  render() {
    const { isDeliveryShown } = this.state;
    return (
      <div className={isDeliveryShown ? "Delivery DeliveryActive" : "Delivery"}>
        <div className="container">
          <div className="deliveryText">
            <span>배송</span>
          </div>
          <div className="typeNarrow">
            <div className="deliveryType">
              <span>일반배송</span>
            </div>
            <div className="arrow">
              <i
                className={
                  isDeliveryShown ? "fas fa-angle-up" : "fas fa-angle-down"
                }
                onClick={() => {
                  this.setState({ isDeliveryShown: !isDeliveryShown });
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="hiddenContent">
          <div className="normalDelivery">
            <div>
              <div className="headerNormal">일반배송 안내</div>
              <ul>
                <li>배송지역 : 전국(일부 지역 제외)</li>
                <li>배송비 : 상품의 구매금액에 상관없이 모든 상품 무료배송</li>
                <li>배송기간 : 결제 후 3일 이내 (토요일, 공휴일 제외)</li>
              </ul>
            </div>
          </div>
          <div className="todayDelivery">
            <div>
              오늘도착 안내 <span>나이키멤버 전용</span>
            </div>
            <ul>
              <li>
                서비스 가능 시간 : 00시부터 13시까지 결제하시면 주문 당일
                도착합니다.
              </li>
              <li>
                서비스 가능 제품 : 상품 상세 페이지의 <span />
                <span>오늘도착</span> 아이콘이 표기되는 제품
              </li>
              <li>
                서비스 이용 방법 : 결제화면 배송선택 옵션을 통해 "오늘도착"
                배송을 이용하실 수 있습니다.
              </li>
              <li>
                오늘도착 가능 지역 : 제품 수령지가, 서울특별시 전체 혹은 경기도
                성남시 분당구에 한함
              </li>
              <li>배송 가능 지역 : 서울·분당 지역에 한해 배송됩니다.</li>
              <li>서비스 비용 : 5,000원</li>
              <li>주문 가능 수량 : 1회 주문 시, 최대 상품 2개</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;
