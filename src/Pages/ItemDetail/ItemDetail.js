import React, { Component } from 'react';
import DetailImages from './Components/DetailImages';
import ProductInfo from './Components/ProductInfo';
import RecommendItem from '../../Components/RecommendItem/RecommendItem';
import { API } from '../../config';
import './ItemDetail.scss';

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      detailImage: [],
      modal: false,
      price: 0,
      name: '',
      title: '',
      content: '',
      style: '',
      color: '',
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
    const id = this.props.match.params.id;
    fetch(`${API}/product${id}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          detailImage: result.data.detailImage,
          price: result.data.price,
          name: result.data.name,
          title: result.data.title,
          content: result.data.content,
          style: result.data.style,
          color: result.data.color,
        });
      });

    document.title = `나이키`;
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
      </article>
    );
  }
}

export default ItemDetail;
