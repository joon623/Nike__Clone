import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import NavCategory from "./Components/NavCategory";
import NavList from "./Data/navList";
import Login from "../Login/Login";
import "./Nav.scss";

class Nav extends Component {
  state = {
    jordanHoverStatus: false,
    ModalStatus: false,
    loginStatus: false,
    myInfoDropDown: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) {
      this.setState({
        loginStatus: true,
      });
    }
  }

  loginStatusChange = () => {
    this.setState({
      loginStatus: true,
    });
  };

  logoutClick = () => {
    this.setState(
      {
        loginStatus: false,
      },
      localStorage.removeItem("token")
    );
  };

  jordanHover = () => {
    const { jordanHoverStatus } = this.state;

    this.setState({
      jordanHoverStatus: !jordanHoverStatus,
    });
  };

  modalStatus = () => {
    const { loginModalStatus } = this.state;

    this.setState({
      loginModalStatus: !loginModalStatus,
    });
  };

  gotoSignup = () => {
    this.props.history.push("/signup");
    window.scrollTo(0, 0);
  };

  userDropdown = () => {
    const { myInfoDropDown } = this.state;

    this.setState({
      myInfoDropDown: !myInfoDropDown,
    });
  };

  render() {
    const {
      jordanHoverStatus,
      loginModalStatus,
      loginStatus,
      myInfoDropDown,
    } = this.state;
    const {
      userDropdown,
      logoutClick,
      gotoSignup,
      modalStatus,
      loginStatusChange,
      jordanHover,
    } = this;

    return (
      <div className="Nav">
        <div className="headernav">
          <ul className="coLists">
            <li>
              <Link className="linkCo" to="/">
                <span className="linkName">Nike</span>
              </Link>
            </li>
            <li>
              <span className="linkCo">
                <span className="linkName">Join US</span>
              </span>
            </li>
            <li>
              <span
                className="linkCo"
                onMouseOver={jordanHover}
                onMouseOut={jordanHover}
              >
                <img
                  className="linkSvgJordan"
                  src={
                    jordanHoverStatus
                      ? "/images/Nav/jordanLogoHover.svg"
                      : "/images/Nav/jordanLogo.svg"
                  }
                  alt="조던 연결 로고"
                />
              </span>
            </li>
            <li>
              <span className="linkCo">
                <img
                  className="linkSvgCon"
                  src="/images/Nav/converseLogo.svg"
                  alt="컨버스 로고"
                />
              </span>
            </li>
          </ul>
          <ul className="myMenuLists">
            <li>
              <span
                className={loginStatus ? "linkMyInfos" : "linkMyInfos hide"}
              >
                <div className="userMenuTab" onClick={userDropdown}>
                  <i className="fas fa-user-circle myInfoIcon" />
                  <span>나위키</span>
                </div>
                <div
                  className={
                    myInfoDropDown ? "userDropDown " : "userDropDown hide"
                  }
                >
                  <span>마이페이지</span>
                  <span>회원정보관리</span>
                  <span>위시리스트</span>
                  <span onClick={logoutClick}>로그아웃</span>
                </div>
              </span>
              <span
                className={
                  loginStatus ? "linkMyMenuName hide" : "linkMyMenuName"
                }
              >
                <span className="linkMyMenuSign" onClick={gotoSignup}>
                  회원가입
                </span>
                <span className="linkNull">/</span>
                <span className="linkMyMenuSign" onClick={modalStatus}>
                  로그인
                </span>
              </span>
            </li>
            <li>
              <span className="linkMyMenu">
                <span className="linkMyMenuName">고객센터</span>
              </span>
            </li>
            <li>
              <span className="linkMyMenu">
                <img
                  className="myMenuCartImg"
                  src="/images/Nav/cartImg.svg"
                  alt="장바구니 아이콘"
                />
              </span>
            </li>
            <li>
              <span className="linkMyMenu">
                <span className="linkMyMenuName">
                  <img
                    className="myMenuLocationImg"
                    src="/images/Nav/locationImg.svg"
                    alt="위치 아이콘"
                  />
                  대한민국
                </span>
              </span>
            </li>
          </ul>
        </div>
        <nav className="navMain">
          <Link className="mainLogoLink" to="/">
            <span className="mainLogoImg">
              <img src="/images/Nav/nikeMainLogo.svg" alt="메인 나이키 로고" />
            </span>
          </Link>
          <ul className="mainCategoryList">
            {NavList?.map((el, i) => {
              return (
                <NavCategory key={i} title={el.categoryTitle} data={el.data} />
              );
            })}
          </ul>
          <div className="searchContainer">
            <span className="mainInputName">
              <input className="mainInput" placeholder="검색" />
            </span>
            <button className="searchBtn">
              <img src="/images/Nav/searchBtn.svg" alt="검색 버튼" />
            </button>
          </div>
        </nav>
        <Login
          loginModalStatus={loginModalStatus}
          modalStatus={modalStatus}
          loginStatusChange={loginStatusChange}
        />
      </div>
    );
  }
}

export default withRouter(Nav);
