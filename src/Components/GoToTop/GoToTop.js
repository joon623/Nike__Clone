import React, { Component } from "react";
import "./GoToTop.scss";

export default class GoToTop extends Component {
  constructor() {
    super();
    this.state = {
      displayButton: false,
    };
  }

  moveTop = () => {
    window.scrollTo(0, 0);
  };

  displayButton = (e) => {
    let y = e.deltaY;
    if (y < 0) {
      if (window.scrollY > 600) {
        this.setState({
          displayButton: true,
        });
      }
    } else if (y > 0) {
      this.setState({
        displayButton: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("wheel", (e) => {
      this.displayButton(e);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", (e) => {
      this.displayButton(e);
    });
  }

  render() {
    const { displayButton } = this.state;
    return (
      <div
        className={displayButton ? "MoveToTop" : "MoveToTop MoveToTopActive"}
        onClick={() => {
          this.moveTop();
        }}
      >
        <div className="scrollUp">
          <i className="fas fa-angle-up" />
        </div>
      </div>
    );
  }
}
