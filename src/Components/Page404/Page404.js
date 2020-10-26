import React, { Component } from 'react';
import './Page404.scss';

class Page404 extends Component {
  render() {
    return (
      <div className="Page404">
        <div className="notFoundBody">
          <main className="notFoundMain">
            <h1 className="nikeLogo">nike</h1>
            <h2>서비스 이용에 불편을 드려서 죄송합니다.</h2>
            <div className="etcText">
              <p>404-NOT FOUND</p>
              <p>현재 서비스에 일시적인 오류가 발생했습니다.</p>
              <p>
                이용에 불편을 드린 점 진심으로 사과 드리며, 고객 여러분의 양해
                부탁 드립니다.
              </p>
            </div>
          </main>
          <footer className="page404Footer">
            <p>
              관련문의사항은 고객센터에 문의해주시면 친절히 안내해드리겠습니다.
            </p>
            <p>고객상담전화: 080-022-0182</p>
            <button
              className="goToMain"
              onClick={() => {
                this.props.history.push('/');
              }}
            >
              홈페이지
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Page404;
