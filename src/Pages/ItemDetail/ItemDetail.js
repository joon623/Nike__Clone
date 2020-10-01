import React, { Component } from "react";
import DetailImages from "./Components/DetailImages";
import ProductInfo from "./Components/ProductInfo";
import Nav from "../../Components/Nav/Nav";
import RecommendItem from "../../Components/RecommendItem/RecommendItem";
import Footer from "../../Components/Footer/Footer";
import GoToTop from "../../Components/GoToTop/GoToTop";
import { productAPI } from "../../config";
import { detailMockData } from "../../config";
import "./ItemDetail.scss";

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      detailImage: [],
      modal: false,
      price: 0,
      name: "",
      title: "",
      content: "",
      style: "",
      color: "",
    };
  }

  handleModal = (index) => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
      imgCurrent: index,
    });
  };

  componentDidMount() {
    // server 킬떄 사용
    // const id = this.props.match.params.id;
    // fetch(`${productAPI}/${id}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     this.setState({
    //       detailImage: result.data.detailImage,
    //       price: result.data.price,
    //       name: result.data.name,
    //       title: result.data.title,
    //       content: result.data.content,
    //       style: result.data.style,
    //       color: result.data.color,
    //     });
    //   });

    //  server 꺼지면 mock 데이터로 사용
    fetch(`${detailMockData}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          detailImage: result.image,
          price: result.price,
          name: result.name,
          title: result.itemInfo.title,
          content: result.content,
          style: result.itemInfo.style,
          color: result.itemInfo.color,
        });
      });
  }

  render() {
    const {
      detailImage,
      modal,
      price,
      name,
      title,
      content,
      style,
      color,
    } = this.state;
    return (
      <>
        <Nav />
        <article className="ItemDetail">
          <DetailImages
            handleModal={this.handleModal}
            detailImage={detailImage}
            modal={modal}
          />
          <ProductInfo
            detailImage={detailImage}
            price={price}
            name={name}
            title={title}
            content={content}
            style={style}
            color={color}
          />
          <RecommendItem />
          <GoToTop />
        </article>
        <Footer />
      </>
    );
  }
}

export default ItemDetail;
