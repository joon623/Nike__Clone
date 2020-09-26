import React, { Component } from "react";
import "./DeliveryService.scss";

class DeliveryService extends Component {
  render() {
    return (
      <div className="DeliveryService">
        <div className="serviceText">
          <span className="nikeLogo" />
          <span>배송보다 빠른, 매장직업 서비스</span>
        </div>
        <div className="serviceContent">
          <span>지금 주문하고, 매장에서 바로 픽업하세요.</span>
          <span>자세히 보기</span>
        </div>
      </div>
    );
  }
}

export default DeliveryService;
