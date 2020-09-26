import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./MenShoesShoes.scss";

class MenShoesShoes extends Component {
  render() {
    const { scrolled, colorFilter } = this.props;
    return (
      <div className={scrolled ? "MenShoesShoes isActive" : "MenShoesShoes"}>
        <ul className="shoesListBoard">
          {colorFilter?.map(({ id, img, title, price }) => {
            return (
              <li key={id}>
                <div className="plate">
                  <div className="image">
                    <img
                      src={img}
                      alt={title}
                      onClick={() => this.props.history.push(`menShoes/${id}`)}
                    />
                  </div>
                  <div className="subPlate">
                    <div className="infoSubPlate">
                      <div className="shoesTitle">
                        <span>{title}</span>
                      </div>
                      <div className="shoesDetail">
                        <span>남성 신발 라이프스타일</span>
                      </div>
                      <div className="shoesColorSelection">
                        <div>1 컬러</div>
                      </div>
                    </div>
                    <div className="shoesPrice">
                      <p>{price.toLocaleString()} 원</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(MenShoesShoes);
