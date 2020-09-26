import React, { Component } from "react";
import { Link } from "react-router-dom";

class BrandList extends Component {
  render() {
    const { subcategory } = this.props;
    return (
      <li className="nrBrandItem">
        <Link
          className="nrBrandLink"
          to={subcategory.subUrl ? subcategory.subUrl : ""}
        >
          {subcategory.subTitle}
        </Link>
      </li>
    );
  }
}

export default BrandList;
