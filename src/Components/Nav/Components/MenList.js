import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenList extends Component {
  render() {
    const { subcategory } = this.props;
    return (
      <li className="nrMenItem">
        <Link
          className="nrMenLink"
          to={subcategory.subUrl ? subcategory.subUrl : ""}
        >
          {subcategory.subTitle}
        </Link>
      </li>
    );
  }
}

export default MenList;
