import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecommenItem.scss";

class RecommendItem extends Component {
  constructor() {
    super();
    this.state = {
      recommends: [],
    };
  }

  componentDidMount() {
    fetch("/Data/itemDetail/DetailData.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ recommends: result.recommends });
      });
  }

  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
    };
    const { recommends } = this.state;
    return (
      <section className="RecommendItem">
        <h2>추천 상품</h2>
        <Slider {...settings}>
          {recommends.map((el, idx) => (
            <div key={idx} className="item">
              <img src={el.imgSrc} alt="recommendImage" />
              <div className="title">
                <span>{el.title}</span>
              </div>
              <div className="category">
                <span>{el.category}</span>
              </div>
              <div className="color">
                <span>{el.colorNum} 컬러</span>
              </div>
              <div className="price">
                <span>{el.price.toLocaleString()}원</span>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}

export default RecommendItem;
