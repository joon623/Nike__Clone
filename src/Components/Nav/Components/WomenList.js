import React, { Component } from "react";
import { Link } from "react-router-dom";

class WomenList extends Component {
  render() {
    const { subcategory } = this.props;
    return (
      <li className="nrWomenItem">
        <Link
          className="nrWomenLink"
          to={subcategory.subUrl ? subcategory.subUrl : ""}
        >
          {subcategory.subTitle}
        </Link>
      </li>
    );
  }
}

export default WomenList;
