import React, { Component } from "react";

class SelectInfo extends Component {
  render() {
    return (
      <table>
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
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
            <td>성별(선택), 생년월일(선택)</td>
            <td>맴버십 혜택 제공 및 커뮤니케이션 맞춤화</td>
            <td>
              <strong>회원탈퇴시까지</strong>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SelectInfo;
