import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import MenShoesHeader from "./Components/MenShoesHeader/MenShoesHeader";
import MenShoesSideBar from "./Components/MenShoesSideBar/MenShoesSideBar";
import MenShoesItems from "./Components/MenShoesItems/MenShoesItems";
import Footer from "../../Components/Footer/Footer";
import DisplayWait from "./Components/Modal/DisplayWait";
import "./Components/MenShoesSideBar/Components/MenShoesSize";
import "./MenShoes.scss";

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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const isTop = window.scrollY < 50;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
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
  render() {
    const { showSideBar, scrolled, filteredColor, modal } = this.state;
    const { toggleSideBar, targetValue, displayModal } = this;
    return (
      <div className="MenShoes">
        <Nav colorReset={filteredColor} />
        <MenShoesHeader
          toggleSideBar={toggleSideBar}
          showSideBar={showSideBar}
          scrolled={scrolled}
        />
        <DisplayWait modalValue={modal} />
        <div className="main">
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(MenShoes);
