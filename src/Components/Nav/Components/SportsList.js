import React, { Component } from "react";
import { Link } from "react-router-dom";

class SportsList extends Component {
  render() {
    const { subcategory } = this.props;
    return (
      <li className="nrSportsItem">
        <Link
          className="nrSportsLink"
          to={subcategory.subUrl ? subcategory.subUrl : ""}
        >
          {subcategory.subTitle}
        </Link>
      </li>
    );
  }
}

export default SportsList;
