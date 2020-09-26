import React, { Component } from "react";
import "./Review.scss";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      isReviewShown: false,
      review: [],
      averageRating: 0,
    };
  }

  componentDidMount() {
    fetch("/Data/itemDetail/DetailData.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState(
          {
            review: result.review,
          },
          () => {
            this.calculateAverageRating();
          }
        );
      });
  }

  maskingName = (originName) => {
    if (originName.length > 2) {
      let splitName = originName.split("");
      splitName.forEach((name, i) => {
        if (i === 0 || i === splitName.length - 1) return;
        splitName[i] = "*";
      });
      return splitName;
    } else {
      const pattern = /.$/;
      return originName.replace(pattern, "*");
    }
  };

  calculateAverageRating = () => {
    const { review } = this.state;
    let ratingSum = 0;
    review.forEach((el) => {
      ratingSum = ratingSum + el.rating;
    });
    this.setState({
      averageRating: ratingSum / review.length,
    });
  };

  render() {
    const { isReviewShown, review, averageRating } = this.state;
    return (
      <div className={isReviewShown ? "Review ReviewVisible" : "Review"}>
        <div className="visibleReview">
          <div className="reviewText">
            <span>리뷰({review.length})</span>
          </div>
          <div className="ratingNarrow">
            <div className="rating">
              <img src="/images/ItemDetail/star.png" alt="star" />
              <img src="/images/ItemDetail/star.png" alt="star" />
              <img src="/images/ItemDetail/star.png" alt="star" />
              <img src="/images/ItemDetail/star.png" alt="star" />
              <img src="/images/ItemDetail/star.png" alt="star" />
            </div>
            <div className="arrow">
              <i
                className={
                  isReviewShown ? "fas fa-angle-up" : "fas fa-angle-down"
                }
                onClick={() => {
                  this.setState({
                    isReviewShown: !isReviewShown,
                  });
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="hiddenReview">
          <div className="writeReview">
            <div className="average">
              <div className="averageRating">
                <img src="/images/ItemDetail/star.png" alt="star" />
                <img src="/images/ItemDetail/star.png" alt="star" />
                <img src="/images/ItemDetail/star.png" alt="star" />
                <img src="/images/ItemDetail/star.png" alt="star" />
                <img src="/images/ItemDetail/star.png" alt="star" />
              </div>
              <div className="averageRatingText">
                <span>{averageRating}</span>
              </div>
            </div>
            <div className="userWriteReview">
              <span>리뷰 작성하기</span>
            </div>
          </div>
          <div className="writtenReview">
            {review.map((el, idx) => {
              return (
                <article key={idx} className="UserReview">
                  <header>{el.title}</header>
                  <div className="reviewInfo">
                    <div className="averageRating">
                      <img src="/images/ItemDetail/star.png" alt="star" />
                      <img src="/images/ItemDetail/star.png" alt="star" />
                      <img src="/images/ItemDetail/star.png" alt="star" />
                      <img src="/images/ItemDetail/star.png" alt="star" />
                      <img src="/images/ItemDetail/star.png" alt="star" />
                    </div>
                    <div className="userName">
                      <span>{this.maskingName(el.name)}</span>
                    </div>
                    <div className="date">
                      <span>{el.date}</span>
                    </div>
                  </div>
                  <div className="content">
                    <span>{el.content}</span>
                  </div>
                  <div className="likeOrdislike">
                    <img src="/images/ItemDetail/arrowup.png" alt="arrowUp" />
                    <span>2</span>
                    <img src="/images/ItemDetail/arrowdown.png" alt="arrowUp" />
                    <span>1</span>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="moreReview">
            <span>더 많은 리뷰 보기</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
