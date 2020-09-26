import React, { Component } from "react";
import { Link } from "react-router-dom";
import CollectionList from "../Components/CollectionList";
import MenList from "../Components/MenList";
import WomenList from "../Components/WomenList";
import SportsList from "../Components/SportsList";
import BrandList from "../Components/BrandList";

class NavCategory extends Component {
  render() {
    const { title, data } = this.props;

    return (
      <li className="mainCategoryItem">
        <span className="mainCategoryLink">{title}</span>
        <div className="NRContainer">
          <div className="NRCenter">
            <div className="nrFirstContainer">
              <ul className="categoryTemaList">
                <li className="categoryTemaItem">
                  <Link
                    className="categoryTemaLinkMain"
                    to={data && data[0].mainUrl}
                  >
                    {data && data[0].categoryTitle}
                  </Link>
                </li>
                {data &&
                  data[0].subcategory?.map((el, i) => {
                    return <CollectionList key={i} subcategory={el} />;
                  })}
              </ul>
            </div>

            <div className="navCategoryLine"></div>

            <div className="nrSecondContainer">
              <ul className="nrMenList">
                <li className="nrMenItem">
                  <Link className="nrMenLinkMain" to={data && data[1].mainUrl}>
                    {data && data[1].categoryTitle}
                  </Link>
                </li>
                {data &&
                  data[1].subcategory?.map((el, i) => {
                    return <MenList key={i} subcategory={el} />;
                  })}
              </ul>
            </div>
            <div className="nrThirdContainer">
              <ul className="nrWomenList">
                <li className="nrWomenItem">
                  <Link
                    className="nrWomenLinkMain"
                    to={data && data[2].mainUrl}
                  >
                    {data && data[2].categoryTitle}
                  </Link>
                </li>
                {data &&
                  data[2].subcategory?.map((el, i) => {
                    return <WomenList key={i} subcategory={el} />;
                  })}
              </ul>
              <ul className="nrWomenList">
                <li className="nrWomenItem">
                  <Link
                    className="nrWomenLinkMain"
                    to={data && data[3].mainUrl}
                  >
                    {data && data[3].categoryTitle}
                  </Link>
                </li>
                {data &&
                  data[3].subcategory?.map((el, i) => {
                    return <WomenList key={i} subcategory={el} />;
                  })}
              </ul>
            </div>
            <div className="navCategoryLine"></div>
            <div className="nrFourthContainer">
              <ul className="nrSportsList">
                <li className="nrSportsItem">
                  <Link
                    className="nrSportsLinkMain"
                    to={data && data[4].mainUrl}
                  >
                    {data && data[4].categoryTitle}
                  </Link>
                </li>
                {data &&
                  data[4].subcategory?.map((el, i) => {
                    return <SportsList key={i} subcategory={el} />;
                  })}
              </ul>
            </div>
            <div className="nrFifthContainer">
              <ul className="nrBrandList">
                <li className="nrBrandItem">
                  <Link
                    className="nrBrandLinkMain"
                    to={data && data[5].mainUrl}
                  >
                    {data && data[5].categoryTitle}
                  </Link>
                </li>
                {data &&
                  data[5].subcategory?.map((el, i) => {
                    return <BrandList key={i} subcategory={el} />;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default NavCategory;
