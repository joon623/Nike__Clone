import React, { Component } from "react";
import "./Refund.scss";
class Refund extends Component {
  constructor() {
    super();
    this.state = {
      isRefundShown: false,
    };
  }

  render() {
    const { isRefundShown } = this.state;
    return (
      <div className={isRefundShown ? "Refund RefundVisible" : "Refund"}>
        <div className="visibleContent">
          <div className="refundText">
            <span>반품A/S</span>
          </div>
          <div className="refundTypeNarrow">
            <div className="refundType">
              <span>온라인 접수/매장 접수</span>
            </div>
            <div
              className="arrow"
              onClick={() => {
                this.setState({
                  isRefundShown: !isRefundShown,
                });
              }}
            >
              <i
                className={
                  isRefundShown ? "fas fa-angle-up" : "fas fa-angle-down"
                }
              ></i>
            </div>
          </div>
        </div>
        <div className="hiddenContent">
          <div className="freeService">
            <div>무료반품서비스</div>
            <div>
              상품의 구매금액에 상관없이 무료반품서비스를 제공하고 있습니다.
            </div>
          </div>
          <div className="receiveRefund">
            <div>매장 반품 접수</div>
            <div>
              나이키 닷컴에서 구매하신 제품은 가까운 나이키 매장에서 반품 접수가
              가능합니다. (일부 매장 제외)
            </div>
            <div>
              대표 매장: 강남점, 명동점, 타임스퀘어점, 코엑스점, 롯데월드 타워점
            </div>
            <div>
              반품 접수 가능 전체 <span>ASSIST SERVICE 매장 확인하기</span>
            </div>
          </div>
          <div className="refundGuide">
            <div>반품 안내</div>
            <div>
              반품접수는 상품수령 후 7일 이내에 상품 미훼손 및 미사용한 경우에만
              해당됩니다.
            </div>
            <div>
              색상/사이즈 불만족, 고객 변심 반품의 경우, 오늘도착 서비스
              (배송)비용에 대한 배송비는 환불되지 않음을 유의해 주시기 바랍니다.
            </div>
            <div>자세히보기</div>
          </div>
          <div className="asGuide">
            <div>AS 안내</div>
            <div>
              나이키닷컴에서 구매하신 제품에 대해 A/S 접수를 원하실 경우에는
              마이페이지 내 A/S 신청·조회 페이지를 이용해 주세요.
            </div>
            <div>자세히보기</div>
          </div>
          <div className="childProtect">
            <div>미성년자 권리보호 안내</div>
            <div>
              미성년 고객께서 상품을 주문(계약) 하시는 경우, 법정대리인(부모님
              등)의 동의가 없으면 미성년자 본인 또는 법정대리인(부모님 등)이 그
              주문(계약)을 취소하실 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Refund;
