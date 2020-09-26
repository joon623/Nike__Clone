import React, { Component } from "react";
import DetailCategoryNprice from "./ProductInfo/DetailCategoryNprice";
import DifferentColorItem from "./ProductInfo/DifferentColorItem";
import SelectSize from "./ProductInfo/SelectSize";
import SizeBox from "./ProductInfo/SizeBox";
import Quantity from "./ProductInfo/Quantity";
import Purchase from "./ProductInfo/Purchase";
import DeliveryService from "./ProductInfo/DeliveryService";
import ItemInfo from "./ProductInfo/ItemInfo";
import Review from "./ProductInfo/Review";
import Delivery from "./ProductInfo/Delivery";
import Refund from "./ProductInfo/Refund";
import "./ProductInfo.scss";

class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      current: -1,
      isActive: false,
      clicked: false,
      quantity: 1,
      modalWait: false,
      basketItems: [],
      filteredItems: [],
      allMount: 0,
      basketItemId: 0,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("basketData") === "null") {
      localStorage.setItem(
        `basketData`,
        JSON.stringify(this.state.basketItems)
      );
      return;
    } else {
      let localBasketData = JSON.parse(localStorage.getItem("basketData"));
      this.setState({
        basketItems: localBasketData,
      });
    }
  }

  handlePrice = (pri, name) => {
    this.setState({
      price: pri,
      name,
    });
  };

  handleStyle = (sty) => {
    this.setState({
      style: sty,
    });
  };

  handleQuantity = (qty) => {
    this.setState({
      quantity: qty,
    });
  };

  // sizebox 클릭 함수
  buttonActive = (index, event) => {
    const selectedSize = event.target.innerText;
    this.setState({
      current: index,
      isActive: false,
      size: selectedSize,
    });
  };

  floatWaitModal = () => {
    const { current } = this.state;
    if (current !== -1) {
      this.setState({
        modalWait: true,
      });
      setTimeout(() => {
        this.setState({
          modalWait: false,
        });
      }, 800);
    }
  };

  goToBasket = () => {
    const { current } = this.state;
    this.floatWaitModal();
    current === -1
      ? this.setState({
          isActive: true,
        })
      : setTimeout(() => {
          this.setState({
            clicked: true,
          });
        }, 800);
    current !== -1 && this.storeData();
  };

  storeData = () => {
    const { basketItems, size, quantity } = this.state;
    const { detailImage } = this.props;
    this.setState(
      {
        basketItems: basketItems.concat([
          {
            basketItemId: this.state.basketItems.length,
            localImage: detailImage,
            style: this.props.style,
            size,
            quantity,
            price: this.props.price,
            name: this.props.name,
            willDelete: true,
          },
        ]),
      },
      () => {
        localStorage.setItem(
          "basketData",
          JSON.stringify(this.state.basketItems)
        );
        let allNum = 0;
        JSON.parse(localStorage.getItem("basketData")).forEach((el) => {
          allNum = allNum + el.price * el.quantity;
        });
        this.setState({
          allMount: allNum,
          filteredItems: this.state.basketItems,
        });
      }
    );
  };

  deleteBasketItem = () => {
    this.setState(
      {
        filteredItems: this.state.filteredItems.filter((el) => el.willDelete),
      },
      () => {
        localStorage.setItem(
          "basketData",
          JSON.stringify(this.state.filteredItems)
        );
        let allNum = 0;
        JSON.parse(localStorage.getItem("basketData")).forEach((el) => {
          allNum = allNum + el.price * el.quantity;
        });
        this.setState({
          allMount: allNum,
          basketItems: this.state.filteredItems,
        });
      }
    );
  };

  goToDetail = () => {
    this.setState({
      clicked: false,
    });
  };

  render() {
    const {
      isActive,
      current,
      clicked,
      quantity,
      style,
      size,
      modalWait,
      allMount,
    } = this.state;
    const { detailImage, name, price, title, content, color } = this.props;
    return (
      <section className="ProductInfo">
        <DetailCategoryNprice
          handlePrice={this.handlePrice}
          name={name}
          price={price}
        />
        <SelectSize />
        <SizeBox
          buttonActive={this.buttonActive}
          current={current}
          isActive={isActive}
        />
        <Quantity handleQuantity={this.handleQuantity} />
        <Purchase
          style={style}
          quantity={quantity}
          clicked={clicked}
          price={price}
          size={size}
          detailImage={detailImage}
          name={name}
          goToBasket={this.goToBasket}
          goToDetail={this.goToDetail}
          floatWaitModal={this.floatWaitModal}
          modalWait={modalWait}
          allMount={allMount}
          localBasketData={JSON.parse(localStorage.getItem("basketData"))}
          deleteBasketItem={this.deleteBasketItem}
          basketItems={this.state.basketItems}
          filteredItems={this.state.filteredItems}
        />
        <DeliveryService />
        <ItemInfo
          handleStyle={this.handleStyle}
          style={this.props.style}
          title={title}
          content={content}
          color={color}
        />
        <Review />
        <Delivery />
        <Refund />
      </section>
    );
  }
}

export default ProductInfo;
