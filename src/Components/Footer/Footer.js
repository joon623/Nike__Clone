import React, { Component } from 'react';
import {
  FOOTER_INFORMATION,
  CUSTOMERSERVICE_DATA,
} from './Data/FOOTER_INFORMATION';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <header className="header">
          <div className="information">
            <ul>
              {FOOTER_INFORMATION.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
          </div>
          <div className="customerService">
            <span>고객센터</span>
            <ul>
              {CUSTOMERSERVICE_DATA.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
          </div>
          <div className="aboutNike">
            <span>ABOUT NIKE</span>
            <span>나이키에 대하여</span>
          </div>
          <div className="social">
            <span>SOCIAL</span>
            <div className="socialIcon">
              <i className="fab fa-twitter" />
              <i className="fab fa-facebook" />
              <i className="fab fa-youtube" />
              <i className="fab fa-instagram" />
            </div>
          </div>
        </header>
        <section className="section">
          <div>
            <span>
              <i className="fas fa-map-marker" />
            </span>
            <span>대한민국</span>
            <span>ⓒ 2020 Nike, Inc. All Rights Reserved</span>
          </div>
          <div>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
        </section>
        <section className="etc">
          <div className="etcInfo">
            <div className="location">
              <span>
                (유)나이키코리아 대표 KIM MYUNG HEE 서울 강남구 테헤란로 152
                강남파이낸스센터
                <br /> 31층
              </span>
            </div>
            <div className="communicationSale">
              <span>
                통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068
                <span>사업자정보확인</span>
              </span>
            </div>
            <div className="personalInfo">
              <span>
                개인정보보호책임자 ANDY HOUGHTON | 정보보호최고책임자 이희준
                고객센터 전화문
                <br />의 <span>080-022-0182</span>
              </span>
            </div>
            <div className="fax">
              <span>
                FAX 02-6744-5880 E-mail service@nike.co.kr | 호스팅서비스사업자
                브리즈
              </span>
            </div>
          </div>
          <div className="insurance">
            <div className="insurranceText">
              <span>
                안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한{' '}
                <br /> KG 이니시스의 구매안전 서비스 (채무지급보증)를 이용하실
                수 있습니다
              </span>
            </div>
            <div className="preventContents">
              <span>
                온라인디지털콘텐츠사업발전법에 의한
                <span>콘텐츠보호안내 자세히보기</span>
              </span>
            </div>
          </div>
          <div className="inipayIcon">
            <img
              src="https://image.inicis.com/mkt/certmark/escrow/escrow_43x43_gray.png"
              alt="inipayIcon"
            />
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
