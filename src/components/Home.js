import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <ul>
        <Link to="/movies">
          <div className="card">
            <li>Movies</li>
            {/* <img src="{img/movie.png}" /> */}
          </div>
        </Link>
        <Link to="series">
          <div className="card">
            <li>Series</li>
            {/* <img src="{./img/serie.PNG}" /> */}
          </div>
        </Link>
      </ul>
    );
  }
}