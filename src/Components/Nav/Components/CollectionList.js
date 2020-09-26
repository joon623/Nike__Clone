import React, { Component } from "react";
import { Link } from "react-router-dom";

class CollectionList extends Component {
  render() {
    const { subcategory } = this.props;
    return (
      <li className="categoryTemaItem">
        <Link
          className="categoryTemaLinkMain"
          to={subcategory.subUrl ? subcategory.subUrl : ""}
        >
          {subcategory.subTitle}
        </Link>
      </li>
    );
  }
}

export default CollectionList;
