import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    const { clickE } = this.props;
    return (
      <div className="personalAgree">
        <span className="personalTitle">개인정보 수집.이용동의</span>

        <table className="personalInfo">
          <thead>
            <tr>
              <th>일시</th>
              <th>수집항목</th>
              <th>수집목적</th>
              <th>보유기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>가입시</td>
              <td>
                아이디, 이메일, 비밀번호, 이름, 휴대폰 번호, 성별, 생년월일
              </td>
              <td>회원식별 및 연락</td>
              <td>
                <strong>회원탈퇴시까지</strong>
              </td>
            </tr>
            <tr>
              <td>최초 구매시</td>
              <td>성별, 생년월일, 휴대폰 번호, DI</td>
              <td>본인확인</td>
              <td>
                <strong>회원탈퇴시까지</strong>
              </td>
            </tr>
            <tr>
              <td>상품 주문시</td>
              <td>수령인 정보(이름, 연락처, 주소), 결제수단 정보</td>
              <td>
                상품 주문 및 배송 등 구매계약의 이행, 상품구매 관련문의사항과
                반품, 환불등 민원사항의 상담 및 처리
              </td>
              <td>
                <strong>전자상거래법 등 관련 법령에 따른 보관기간</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="personalCheck">
          <input
            className="personalBox"
            type="checkBox"
            name="personalCheck"
            onClick={clickE}
          ></input>
          <span className="personalText">[필수] 개인정보 수집.이용동의</span>
          <div>
            <div className="personalSubInfo">
              ※ 약관 및 개인정보 처리방침은 홈페이지 하단에 전문이 게재되어
              있습니다.
              <br />※ 이용약관 및 개인정보 수집.이용 내용에 대해 동의 거부가
              가능하며, <br />이 경우 회원가입 및 관련 서비스는 이용이
              불가합니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
