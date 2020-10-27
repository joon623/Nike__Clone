import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PersonalInfo from './Components/PersonalInfo';
import TermsInfo from './Components/TermsInfo';
import SelectInfo from './Components/SelectInfo';
import { signUpAPI } from '../../config';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    userEmail: '',
    userPassword: '',
    userRePassword: '',
    userName: '',
    userPhone: '',
    userEmailErrorStatus: false,
    userPasswordErrorStatus: false,
    userRePasswordErrorStatus: false,
    userNameErrorStatus: false,
    userPhoneErrorStatus: false,
    userEmailErrorMsg: false,
    userPasswordErrorMsg: false,
    userRePasswordErrorMsg: false,
    userNameErrorMsg: false,
    userPhoneErrorMsg: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    if (localStorage.getItem('token')) {
      this.setState({
        loginStatus: true,
      });
    }
  }

  signUpFocus = this.signUpFocus.bind(this);

  signUpFocus() {
    const {
      userEmailErrorStatus,
      userPasswordErrorStatus,
      userRePasswordErrorStatus,
      userNameErrorStatus,
      userPhoneErrorStatus,
      termsCheck,
      personalCheck,
    } = this.state;

    if (userEmailErrorStatus) {
      return this.idInput.focus();
    }
    if (userPasswordErrorStatus) {
      return this.pwInput.focus();
    }
    if (userRePasswordErrorStatus) {
      return this.repwInput.focus();
    }
    if (userNameErrorStatus) {
      window.scrollTo(0, 300);
      return this.nameInput.focus();
    }
    if (userPhoneErrorStatus) {
      this.phoneInput.focus();
      return window.scrollTo(0, 300);
    }
    if (!termsCheck) {
      return window.scrollTo(0, 335);
    }
    if (!personalCheck) {
      return window.scrollTo(0, 700);
    } else {
      window.scrollTo(0, 335);
      this.idInput.focus();
    }
  }

  errorPrint = (inputError) => {
    this.setState({
      [`${inputError}ErrorStatus`]: true,
      [`${inputError}ErrorMsg`]: true,
    });
  };

  errorClose = (inputError) => {
    this.setState({
      [`${inputError}ErrorStatus`]: false,
    });
  };

  emailCheck = (inputError, inputValue) => {
    const emailError =
      inputValue.includes('@') &&
      inputValue.includes('.') &&
      inputValue.includes('com');
    const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣()]/;

    if (emailError && !inputValue.match(checkKor)) {
      this.errorClose(inputError);
    } else {
      this.errorPrint(inputError);
    }
  };

  pwCheck = (inputError, inputValue) => {
    const checkSpc = /[~!@#$%^&*_+|<>?:{}]/;
    const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣()]/;
    const checkEng = /[a-zA-Z]/;
    const checkNum = /[0-9]/;

    if (8 > inputValue.length || 16 < inputValue.length) {
      return this.errorPrint(inputError);
    } else {
      if (
        inputValue.match(checkSpc) &&
        inputValue.match(checkEng) &&
        inputValue.match(checkNum) &&
        !inputValue.match(checkKor)
      ) {
        return this.errorClose(inputError);
      } else {
        return this.errorPrint(inputError);
      }
    }
  };

  repwCheck = (inputError, inputValue) => {
    const { userPassword } = this.state;

    if (inputValue === userPassword) {
      return this.errorClose(inputError);
    } else {
      return this.errorPrint(inputError);
    }
  };

  nameCheck = (inputError, inputValue) => {
    const checkSpc = /[~!@#$%^&*_+|<>?:{}]/;
    const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣()]/;
    const checkEng = /[a-zA-Z]/;
    const checkNum = /[0-9]/;

    if (
      !inputValue.match(checkSpc) &&
      !inputValue.match(checkEng) &&
      !inputValue.match(checkNum) &&
      inputValue.match(checkKor)
    ) {
      return this.errorClose(inputError);
    } else {
      return this.errorPrint(inputError);
    }
  };

  phoneCheck = (inputError, inputValue) => {
    const checkSpc = /[~!@#$%^&*_+|<>?:{}]/;
    const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣()]/;
    const checkEng = /[a-zA-Z]/;
    const checkNum = /[0-9]/;

    if (
      !inputValue.match(checkSpc) &&
      !inputValue.match(checkEng) &&
      inputValue.match(checkNum) &&
      !inputValue.match(checkKor) &&
      inputValue.length === 11
    ) {
      return this.errorClose(inputError);
    } else {
      return this.errorPrint(inputError);
    }
  };

  errMsgStatus = (inputError, inputValue) => {
    const basicError = inputValue.length;

    if (!basicError) {
      this.setState({
        [`${inputError}ErrorStatus`]: true,
        [`${inputError}ErrorMsg`]: false,
      });
    } else if (basicError) {
      if (inputError === 'userEmail') {
        return this.emailCheck(inputError, inputValue);
      }

      if (inputError === 'userPassword') {
        return this.pwCheck(inputError, inputValue);
      }

      if (inputError === 'userRePassword') {
        return this.repwCheck(inputError, inputValue);
      }

      if (inputError === 'userName') {
        return this.nameCheck(inputError, inputValue);
      }

      if (inputError === 'userPhone') {
        return this.phoneCheck(inputError, inputValue);
      }
    }
  };

  termsCheck = (e) => {
    const { name, checked } = e.target;

    this.setState({
      [name]: checked,
    });
  };

  signUpInput = (e) => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.errMsgStatus(name, value);
      }
    );
  };

  allValidCheck = () => {
    const {
      userEmail,
      userPassword,
      userRePassword,
      userName,
      userPhone,
    } = this.state;

    this.errMsgStatus('userEmail', userEmail);
    this.errMsgStatus('userPassword', userPassword);
    this.errMsgStatus('userRePassword', userRePassword);
    this.errMsgStatus('userName', userName);
    this.errMsgStatus('userPhone', userPhone);
  };

  signUpClick = () => {
    const {
      userEmail,
      userPassword,
      userRePassword,
      userName,
      userPhone,
      userEmailErrorStatus,
      userPasswordErrorStatus,
      userRePasswordErrorStatus,
      userNameErrorStatus,
      userPhoneErrorStatus,
    } = this.state;

    const { termsCheck, personalCheck } = this.state;

    if (termsCheck && personalCheck) {
      this.allValidCheck();

      if (
        !userEmailErrorStatus &&
        !userPasswordErrorStatus &&
        !userRePasswordErrorStatus &&
        !userNameErrorStatus &&
        !userPhoneErrorStatus &&
        userEmail !== '' &&
        userPassword !== '' &&
        userRePassword !== '' &&
        userName !== '' &&
        userPhone !== ''
      ) {
        fetch(signUpAPI, {
          method: 'POST',
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            name: userName,
            phone_number: userPhone,
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.message === 'SIGN_UP SUCCESS') {
              alert('회원가입 성공');
              this.props.history.push('/');
            } else if (response.message === 'EXISTS_EMAIL') {
              alert('중복된 이메일이 있습니다.');
            }
          });
      } else {
        this.signUpFocus();
        alert('입력 사항을 입력해주세요.');
      }
    } else {
      this.allValidCheck();
      this.signUpFocus();
      alert('필수 체크란을 확인하세요.');
    }
  };

  render() {
    const {
      userEmailErrorStatus,
      userPasswordErrorStatus,
      userRePasswordErrorStatus,
      userNameErrorStatus,
      userPhoneErrorStatus,
      userEmailErrorMsg,
      userPasswordErrorMsg,
      userRePasswordErrorMsg,
      userNameErrorMsg,
      userPhoneErrorMsg,
    } = this.state;

    return (
      <div className="SignUp">
        <section className="section">
          <div>
            <div className="signUpText">
              <h2>나이키 멤버 가입</h2>
              <p>
                멤버가 되어 나이키가 제공하는<br></br> 최고의 제품과 혜택을
                만나보세요.
              </p>
            </div>
            <div className="coSignConnect">
              <span className="kakaoSignUp">
                <img
                  className="kakaoLogo"
                  src="/images/Nav/kakaotalk.svg"
                  alt="카카오톡 이미지"
                />
                카카오 계정으로 신규 가입
              </span>
              <span className="faceBookSignUp">
                <img
                  className="faceBookLogo"
                  src="/images/Nav/faceBook.svg"
                  alt="페이스북 이미지"
                />
                페이스북 계정으로 신규 가입
              </span>
            </div>
            <div className="orContainer">
              <div className="orLine"></div>
              <span className="orText">OR</span>
              <div className="orLine"></div>
            </div>
            <div>
              <form>
                <div className="inputCenter">
                  <input
                    className={
                      userEmailErrorStatus ? 'inputBox error' : 'inputBox'
                    }
                    placeholder="사용하실 ID를 입력해주세요. (수신 가능 E-mail)"
                    name="userEmail"
                    onChange={this.signUpInput}
                    ref={(input) => {
                      this.idInput = input;
                    }}
                  ></input>
                  <span
                    className={
                      userEmailErrorStatus ? 'errorMsg' : 'errorMsg hide'
                    }
                  >
                    {userEmailErrorMsg
                      ? '이메일 형태로 입력해주세요. 해당 계정으로 주문 내역이 발송됩니다.'
                      : '필수 입력 항목입니다.'}
                  </span>
                </div>
                <div className="inputCenter">
                  <input
                    className={
                      userPasswordErrorStatus ? 'inputBox error' : 'inputBox'
                    }
                    placeholder="영문+숫자+특수문자 8~16자리(특수문자 괄호()는 사용 불가)"
                    name="userPassword"
                    onChange={this.signUpInput}
                    type="password"
                    ref={(input) => {
                      this.pwInput = input;
                    }}
                  ></input>
                  <span
                    className={
                      userPasswordErrorStatus ? 'errorMsg' : 'errorMsg hide'
                    }
                  >
                    {userPasswordErrorMsg
                      ? '영문/숫자/특수문자 조합 8~16자 조합으로 입력해주세요.'
                      : '필수 입력 항목입니다.'}
                  </span>
                </div>
                <div className="inputCenter">
                  <input
                    className={
                      userRePasswordErrorStatus ? 'inputBox error' : 'inputBox'
                    }
                    placeholder="패스워드를 다시 입력해주세요."
                    name="userRePassword"
                    onChange={this.signUpInput}
                    type="password"
                    ref={(input) => {
                      this.repwInput = input;
                    }}
                  ></input>
                  <span
                    className={
                      userRePasswordErrorStatus ? 'errorMsg' : 'errorMsg hide'
                    }
                  >
                    {userRePasswordErrorMsg
                      ? '입력값이 일차하지 않습니다.'
                      : '필수 입력 항목입니다.'}
                  </span>
                </div>
                <div className="inputCenter">
                  <input
                    className={
                      userNameErrorStatus ? 'inputBox error' : 'inputBox'
                    }
                    placeholder="이름을 입력해 주세요."
                    name="userName"
                    onChange={this.signUpInput}
                    ref={(input) => {
                      this.nameInput = input;
                    }}
                  ></input>
                  <span
                    className={
                      userNameErrorStatus ? 'errorMsg' : 'errorMsg hide'
                    }
                  >
                    {userNameErrorMsg
                      ? '한글만 입력 가능합니다.'
                      : '필수 입력 항목입니다.'}
                  </span>
                </div>
                <div className="inputCenter">
                  <input
                    className={
                      userPhoneErrorStatus ? 'inputBox error' : 'inputBox'
                    }
                    placeholder="휴대폰 번호 '-'표 없이 입력해 주세요."
                    name="userPhone"
                    onChange={this.signUpInput}
                    ref={(input) => {
                      this.phoneInput = input;
                    }}
                  ></input>
                  <span
                    className={
                      userPhoneErrorStatus ? 'errorMsg' : 'errorMsg hide'
                    }
                  >
                    {userPhoneErrorMsg
                      ? '숫자만 입력 가능합니다.'
                      : '필수 입력 항목입니다.'}
                  </span>
                </div>
                <TermsInfo clickE={this.termsCheck} />
                <PersonalInfo clickE={this.termsCheck} />
                <div className="selectInfoContainer">
                  <span className="selectInfoTitle">
                    선택적 개인정보.이용동의
                  </span>
                  <SelectInfo />
                  <div className="selectInfoCheck">
                    <input className="selectInfoBox" type="checkBox"></input>
                    <span className="selectInfoText">
                      [선택] 개인정보 수집.이용동의
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="signUpBtnBox">
              <button className="SignUpText" onClick={this.signUpClick}>
                회원가입하기 (만 14세 이상)
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(SignUp);
