import React, { Component } from 'react';
import MenShoesSize from './Components/MenShoesSize';
import MenShoesColor from './Components/MenShoesColor';
import { listMockData } from '../../../../config';
import '../MenShoesSideBar/MenShoesSideBar.scss';

class MenShoesSideBar extends Component {
  constructor() {
    super();

    this.state = {
      sizeList: [],
      colorList: [],
      sizeExpanded: true,
      colorExpanded: true,
    };
  }

  componentDidMount() {
    fetch(`${listMockData}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          sizeList: result.size,
          colorList: result.color,
        });
      });
  }

  handleToggle = (e) => {
    const { toggle } = e.target.dataset;
    this.setState({
      [toggle]: !this.state[toggle],
    });
  };

  render() {
    const { sizeExpanded, colorExpanded, sizeList, colorList } = this.state;
    const { showSideBar, scrolled, targetValue, displayModal } = this.props;
    const { handleToggle } = this;
    console.log(window.scrollY > 7856);
    return (
      <div className={showSideBar ? 'SideBar' : 'SideBar isActive'}>
        <div
          className={scrolled ? 'sizingSideBar isActive' : 'sizingSideBar'}
          style={{ zIndex: window.scrollY > 7856 ? -1 : '' }}
        >
          <div className={scrolled ? 'shoesSize isActive' : 'shoesSize'}>
            <div
              className="shoesSizeTitle"
              data-toggle="sizeExpanded"
              onClick={handleToggle}
            >
              <div className="title">신발 사이즈</div>
              <div className="icon">
                <i
                  className={
                    sizeExpanded ? 'fas fa-angle-up' : 'fas fa-angle-down'
                  }
                ></i>
              </div>
            </div>
            <MenShoesSize isActive={sizeExpanded} sizeList={sizeList} />
          </div>
          <div className="shoesColor">
            <div
              className="shoesColorTitle"
              data-toggle="colorExpanded"
              onClick={handleToggle}
            >
              <div className="title">색상</div>
              <div className="icon">
                <i
                  className={
                    colorExpanded ? 'fas fa-angle-up' : 'fas fa-angle-down'
                  }
                ></i>
              </div>
            </div>
            <MenShoesColor
              isActive={colorExpanded}
              colorList={colorList}
              targetValue={targetValue}
              displayModal={displayModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MenShoesSideBar;
