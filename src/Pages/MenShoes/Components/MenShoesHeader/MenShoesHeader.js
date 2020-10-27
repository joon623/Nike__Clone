import React, { Component } from 'react';
import SortingBoard from './Components/SortingBoard';
import './MenShoesHeader.scss';

class MenShoesHeader extends Component {
  constructor() {
    super();

    this.state = {
      isActivated: true,
    };
  }

  sortToggle = () => {
    const { isActivated } = this.state;
    this.setState({
      isActivated: !isActivated,
    });
  };

  render() {
    const { isActivated } = this.state;
    const { scrolled, toggleSideBar, showSideBar } = this.props;
    return (
      <div className={scrolled ? 'MenShoesHeader scrolled' : 'MenShoesHeader'}>
        <div
          className={
            scrolled ? 'titleSection scrolledTitleSection' : 'titleSection'
          }
        >
          <div className="titleSub">Men</div>
          <div className={scrolled ? 'titleMain scrolledTitle' : 'titleMain'}>
            Men's 신발
          </div>
          <div className="titleSpace" />
        </div>
        <div
          className={
            scrolled
              ? 'sortingSection scrolledSortingSection'
              : 'sortingSection'
          }
        >
          <div className="sortingIcons">
            <div className="sortingFilter" onClick={toggleSideBar}>
              <span>FILTER</span>
              <i
                className={
                  showSideBar ? 'fas fa-angle-down' : 'fas fa-angle-up'
                }
              />
            </div>
            <div className="sortingInOrder" onClick={this.sortToggle}>
              <span>신상품순</span>
              <i
                className={
                  isActivated ? 'fas fa-angle-down' : 'fas fa-angle-up'
                }
              />
              <SortingBoard isActivated={isActivated} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MenShoesHeader;
