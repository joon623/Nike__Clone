import React, { Component } from "react";
import Slider from "react-slick";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import GoToTop from "../../Components/GoToTop/GoToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.scss";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
    };
  }

  componentDidMount() {
    this.display();
    document.title = "나이키";
  }

  display = () => {
    this.play = setInterval(() => {
      const { display } = this.state;
      this.setState({
        display: !display,
      });
    }, 1500);
  };

  componentWillMount() {
    clearInterval(this.displayInterval);
  }

  render() {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrows: true,
    };
    const { display } = this.state;
    return (
      <>
        <GoToTop />
        <Nav />
        <div className="Main">
          <div className="mainVideo">
            <video
              loop="loop"
              autoplay="autoplay"
              muted="muted"
              webkit-playsinline="webkit-playsinline"
              playsinline="playsinline"
              draggable="true"
            >
              <source src="https://nikevideo.nike.com/72451143001/202008/3815/72451143001_6185316368001_6185316611001.mp4" />
            </video>
          </div>
          <div className="nikeFly">
            <h1>나이키 플라이이즈</h1>
            <div>
              <span>
                쉽고 빠르게 신발을 신을 수 있는 혁신적인 기술을 만나보세요
              </span>
            </div>
            <div className="button">
              <button>
                <span>구매하기</span>
              </button>
              <button>
                <span>자세히 보기</span>
              </button>
            </div>
          </div>
          <div className="runningFastPack">
            <div className="img">
              <img
                alt="fastPackImg"
                src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200916_hp_p2_bg.jpg"
              />
            </div>
            <h1>나이키 러닝 패스트 팩</h1>
            <div className="fastText">
              <span>
                새롭게 출시된 나이키 패스트 팩과 함께 마라톤 시즌을 준비하고
                러닝 목표를 달성해보세요.
              </span>
            </div>
            <div className="fastButton">
              <button className="buy">
                <span>컬렉션 구매하기</span>
              </button>
              <button className="detail">
                <span>자세히 보기</span>
              </button>
            </div>
          </div>
          <div className="flyNeat">
            <div className="img">
              <img
                src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200909_hp_p5_bg.jpg"
                alt="neatImg"
              />
            </div>
            <h1>나이키 에어 베이퍼맥스 2020 플라이 니트</h1>
            <div>
              <span>
                무게의 최소 50%가 재활용 소재로 만들어진 나이키 에어 베이퍼맥스
                2020. <br />
                새로운 컬러로 출시된 에어 베이퍼맥스 2020과 함께 지속가능성을
                향한 여정에 동참해보세요.
              </span>
            </div>
            <div className="buyButton">
              <button className="neatBuy">
                <span>구매하기</span>
              </button>
            </div>
          </div>
          <div className="thisWeekStyling">
            <h3>이번 주 스타일링</h3>
            <div className="styleImg">
              <img
                src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200911_hp_p3_bg.jpg"
                alt="thisWeekStyle"
              />
            </div>
          </div>
          <div className="highAvailability">
            <h1>활용도 높은 나이키 레이어드 스타일링</h1>
            <div className="availabilityText">
              <span>
                활용도 높은 디자인으로 다양한 스타일과 믹스매치 할 수 있는
                나이키 레이어드 스타일링을 소개합니다.
                <br /> 나이키가 제안하는 다양한 룩과 함께 개성있는 룩을
                완성해보세요.
              </span>
            </div>
            <div className="buttonAvailable">
              <button className="buy">
                <span>구매하기</span>
              </button>
              <button>
                <span>더 많은 스타일링 보기</span>
              </button>
            </div>
          </div>
          <div className="flixCollection">
            <div className="collectionImg">
              <img
                className={display ? "none" : "display"}
                src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200828_hp_p3_bg_b.jpg"
                alt="collectionImg"
              />
              <img
                onClick={this.display}
                className={display ? "display" : "none"}
                src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200828_hp_p3_bg_a.jpg"
                alt="collectionImg"
              />
            </div>
            <h1>나이키 테크 플리스 컬렉션</h1>
            <div className="flixText">
              <span>
                가을을 위한 모던함으로 새롭게 돌아온 아이코닉한 테크 플리스를
                만나보세요.
                <br />
                세련된 핏과 편안함으로 시대를 초월하는 스타일을 선사합니다.
              </span>
            </div>
            <div className="flixButton">
              <button className="buy">
                <span>구매하기</span>
              </button>
            </div>
          </div>
          <div className="jordanZoom">
            <video
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              playsinline="playsinline"
              draggable="true"
            >
              <source src="https://nikevideo.nike.com/72451143001/202008/1263/72451143001_6184865978001_6184865570001.mp4" />
            </video>
            <h1>조던 줌’92</h1>
            <div className="zoomText">
              <span>
                90년대의 아이코닉한 스니커즈와 혁신적인 줌 에어 쿠셔닝이 만나
                <br />
                새롭게 출시된 조던 줌’92를 만나보세요.
              </span>
            </div>
            <div className="buttonBuy">
              <button>
                <span>구매하기</span>
              </button>
            </div>
          </div>
          <div className="trendingNow">
            <h3>Trending Now</h3>
            <div className="trendingImg">
              <img src="/images/Main/swoosh.jpg" alt="trendingImg" />
              <div className="daybreakContainer">
                <img src="/images/Main/dayBreak.jpg" alt="trendingImg" />
                <div className="daybreak">
                  <h4>데이 브레이크</h4>
                  <button>
                    <span>구매하기</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swooshCollectionButton">
              <h4>스우시 컬렉션</h4>
              <button>
                <span>구매하기</span>
              </button>
            </div>
          </div>
          <div className="featuredShoes">
            <h3>Featured Shoes</h3>
            <div className="items">
              <Slider {...settings}>
                <div className="collectionInfo">
                  <img
                    src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200825_hp_p10_bg1.jpg"
                    alt="collectionInfo"
                  />
                  <div className="name">
                    <span>나이키 에어 베이퍼맥스 2020Fk</span>
                  </div>
                  <div className="category">
                    <span>남성 신발 라이프스타일</span>
                  </div>
                  <div className="price">
                    <span>259,000원</span>
                  </div>
                </div>
                <div className="collectionInfo">
                  <img
                    src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200825_hp_p10_bg2.jpg"
                    alt="collectionInfo"
                  />
                  <div className="name">
                    <span>나이키 데이브레이크</span>
                  </div>
                  <div className="category">
                    <span>여성 신발 라이프스타일</span>
                  </div>
                  <div className="price">
                    <span>119,000원</span>
                  </div>
                </div>
                <div className="collectionInfo">
                  <img
                    src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200825_hp_p10_bg3.jpg"
                    alt="collectionInfo"
                  />
                  <div className="name">
                    <span>나이키 와플 레이서 2X</span>
                  </div>
                  <div className="category">
                    <span>여성 신발 라이프스타일</span>
                  </div>
                  <div className="price">
                    <span>119,000원</span>
                  </div>
                </div>
                <div className="collectionInfo">
                  <img
                    src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200825_hp_p10_bg4.jpg"
                    alt="collectionInfo"
                  />
                  <div className="name">
                    <span>나이키 에어 줌 페가수스 37</span>
                  </div>
                  <div className="category">
                    <span>남성 신발 런닝</span>
                  </div>
                  <div className="price">
                    <span>139,000원</span>
                  </div>
                </div>
                <div className="collectionInfo">
                  <img
                    src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200717_hp_p10_bg5.jpg"
                    alt="collectionInfo"
                  />
                  <div className="name">
                    <span>줌 프릭2</span>
                  </div>
                  <div className="category">
                    <span>남성 신발 농구</span>
                  </div>
                  <div className="price">
                    <span>139,000원</span>
                  </div>
                </div>
                <div className="collectionInfo">
                  <img
                    src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200825_hp_p10_bg6.jpg"
                    alt="collectionInfo"
                  />
                  <div className="name">
                    <span>에어 조던 3 레트로 SE</span>
                  </div>
                  <div className="category">
                    <span>남성 신발 농구</span>
                  </div>
                  <div className="price">
                    <span>239,000원</span>
                  </div>
                </div>
                <div className="collectionInfo">
                  <img
                    src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200825_hp_p10_bg7.jpg"
                    alt="collectionInfo"
                  />
                  <div className="name">
                    <span>나이키 에어맥스 270 G</span>
                  </div>
                  <div className="category">
                    <span>성인공용 신발 골프</span>
                  </div>
                  <div className="price">
                    <span>199,000원</span>
                  </div>
                </div>
                <div className="collectionInfo">
                  <img
                    src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200825_hp_p10_bg8.jpg"
                    alt="collectionInfo"
                  />
                  <div className="name">
                    <span>나이키 머큐리얼 슈퍼플라이 7 엘리트 TF</span>
                  </div>
                  <div className="category">
                    <span>인공 잔디 축구화</span>
                  </div>
                  <div className="price">
                    <span>199,000원</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="apparelEssentials">
            <div className="collection">
              <img
                src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200914_hp_p10_bg1.jpg"
                alt="collectionImg"
              />
              <div className="collectionText">
                <span>재킷 & 베스트</span>
              </div>
            </div>
            <div className="collection">
              <img
                src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200914_hp_p10_bg2.jpg"
                alt="collectionImg"
              />
              <div className="collectionText">
                <span>후디 & 크루</span>
              </div>
            </div>
            <div className="collection">
              <img
                src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/2357/200914_hp_p10_bg3.jpg"
                alt="collectionImg"
              />
              <div className="collectionText">
                <span>팬츠 & 타이츠</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
