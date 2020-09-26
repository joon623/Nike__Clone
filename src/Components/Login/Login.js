import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { signInAPI } from "../../config";
import "./Login.scss";

class Login extends Component {
  state = {
    userId: "",
    userPw: "",
    idValid: false,
    pwValid: false,
    isLoginValid: false,
  };

  typingLoginInfo = (e) => {
    const { userId, userPw } = this.state;
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
    if (userId) {
      this.setState({
        idValid: false,
      });
    }
    if (userPw) {
      this.setState({
        pwValid: false,
      });
    }
  };

  isLoginValid = () => {
    this.setState({
      isLoginValid: true,
    });
  };

  loginClick = (e) => {
    e.preventDefault();
    const { userId, userPw } = this.state;
    const { modalClickClose } = this;
    const { loginStatusChange } = this.props;

    if (!userId) {
      this.setState({
        idValid: true,
      });
    }
    if (!userPw) {
      this.setState({
        pwValid: true,
      });
    }
    if (userId.length > 1 && userPw.length > 1) {
      fetch(signInAPI, {
        method: "POST",
        body: JSON.stringify({
          email: userId,
          password: userPw,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.Authorization) {
            localStorage.setItem("token", response.Authorization);
            alert("로그인 성공");
            this.props.history.push("/");
            modalClickClose();
            loginStatusChange();
          } else {
            this.isLoginValid();
            alert("잘못된 비밀번호입니다. 다시 입력하세요.");
          }
        });
    }
  };

  modalEscClose = (e) => {
    if (e.key === "Escape") {
      this.modalClickClose();
    }
  };

  modalClickClose = () => {
    const { modalStatus } = this.props;
    this.setState({
      idValid: false,
      pwValid: false,
      isLoginValid: false,
      userId: "",
      userPw: "",
    });
    modalStatus();
  };

  render() {
    const {
      modalClickClose,
      typingLoginInfo,
      modalEscClose,
      loginClick,
    } = this;
    const { loginModalStatus } = this.props;
    const { idValid, pwValid, isLoginValid, userId, userPw } = this.state;

    return (
      <div className="Login">
        <div
          className={
            loginModalStatus ? "slidein loginModal" : "loginModal hide"
          }
        >
          <div className="modal">
            <div className="closeIcon" onClick={modalClickClose}>
              <i className="fas fa-times" />
            </div>
            <div className="loginLogo">
              <img
                className="loginNikeLogo"
                src="/images/Nav/nikeMainLogo.svg"
                alt="메인 나이키 로고"
              />
              <h2 className="loginNikeText">나이키 로그인</h2>
            </div>
            <div>
              <form>
                <span
                  className={
                    isLoginValid ? "loginFailMsg" : "loginFailMsg hide"
                  }
                >
                  아이디 혹은 비밀번호가 잘못 입력되었습니다.
                </span>
                <input
                  className={idValid ? "loginIdBox error" : "loginIdBox"}
                  placeholder="아이디"
                  name="userId"
                  onChange={typingLoginInfo}
                  value={userId}
                  onKeyDown={modalEscClose}
                />
                <span
                  className={idValid ? "loginIdFailMsg" : "loginIdFailMsg hide"}
                >
                  필수 입력 항목입니다.
                </span>
                <input
                  className={pwValid ? "loginIdBox error" : "loginIdBox"}
                  placeholder="비밀번호"
                  name="userPw"
                  onChange={typingLoginInfo}
                  value={userPw}
                  type="password"
                  onKeyDown={modalEscClose}
                />
                <span
                  className={pwValid ? "loginIdFailMsg" : "loginIdFailMsg hide"}
                >
                  필수 입력 항목입니다.
                </span>
                <div className="loginOpt">
                  <div className="loginConBox">
                    <input className="checkbox" type="checkbox" />
                    <span className="loginCon">로그인 유지하기</span>
                  </div>
                  <span className="findId">아이디/비밀번호 찾기</span>
                </div>
                <div>
                  <button className="loginBtn" onClick={loginClick}>
                    로그인
                  </button>
                  <button className="kakaoLoginBtn">
                    <img
                      className="kakaoLogo"
                      src="/images/Nav/kakaotalk.svg"
                      alt="카카오톡 이미지"
                    />
                    카카오계정 로그인
                  </button>
                  <button className="facebookLoginBtn">
                    <img
                      className="faceBookLogo"
                      src="/images/Nav/faceBook.svg"
                      alt="페이스북 이미지"
                    />
                    페이스북으로 로그인
                  </button>
                </div>
                <div className="loginFooter">
                  <div className="loginSignupBox">
                    <span className="loginSignupText">회원이 아니신가요?</span>
                    <span className="loginSignupBtn">회원가입</span>
                  </div>
                  <span className="unknownUser">비회원 주문 조회</span>
                </div>
              </form>
            </div>
          </div>
          <div className="modalLayer" onClick={modalClickClose}></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
