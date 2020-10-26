import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MenShoesHeader from './Components/MenShoesHeader/MenShoesHeader';
import MenShoesSideBar from './Components/MenShoesSideBar/MenShoesSideBar';
import MenShoesItems from './Components/MenShoesItems/MenShoesItems';
import DisplayWait from './Components/Modal/DisplayWait';
import './Components/MenShoesSideBar/Components/MenShoesSize';
import './MenShoes.scss';

class MenShoes extends Component {
  constructor() {
    super();

    this.state = {
      filteredColor: [],
      scrolled: false,
      showSideBar: true,
      modal: true,
    };
  }

  handleScroll = () => {
    window.scrollY > 50
      ? this.setState({ scrolled: true })
      : this.setState({ scrolled: false });
  };

  toggleSideBar = () => {
    const { showSideBar } = this.state;
    this.setState({
      showSideBar: !showSideBar,
    });
  };

  targetValue = (color) => {
    setTimeout(() => {
      this.setState({
        filteredColor: color,
      });
    }, 800);
    this.displayModal();
  };

  displayModal = () => {
    this.setState({
      modal: false,
    });

    setTimeout(() => {
      this.setState({
        modal: true,
      });
    }, 800);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    const { showSideBar, scrolled, filteredColor, modal } = this.state;
    const { toggleSideBar, targetValue, displayModal } = this;
    return (
      <>
        <div className="MenShoes">
          <MenShoesHeader
            toggleSideBar={toggleSideBar}
            showSideBar={showSideBar}
            scrolled={scrolled}
          />
          <DisplayWait modalValue={modal} />
          <main className="main">
            <MenShoesSideBar
              showSideBar={showSideBar}
              scrolled={scrolled}
              targetValue={targetValue}
              displayModal={displayModal}
            />
            <MenShoesItems
              showSideBar={showSideBar}
              scrolled={scrolled}
              filteredColor={filteredColor}
              targetValue={targetValue}
            />
          </main>
        </div>
      </>
    );
  }
}

export default withRouter(MenShoes);
