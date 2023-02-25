import { Link } from "react-router-dom";
import React, { Component } from "react";

class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <header>
          <nav className= "navbar">
            <div className="logo">
              <Link className="">COC-STATS</Link>
            </div>
            <div className="nav-menu">
              <ul className={this.state.clicked ? "nav-list active" : "nav-list"}>
                <li className="nav-item">
                  <Link to={"#"}>About</Link>
                </li>

                <li className="nav-item">
                  <Link to={"#"}>Clans</Link>
                </li>

                <li className="nav-item">
                  <Link to={"#"}>Town hall</Link>
                </li>

                <li className="nav-item">
                  <Link to={"#"}>Troops</Link>
                </li>

                <li className="nav-item">
                  <Link to={"#"}>Blog</Link>
                </li>
              </ul>
              <div className="hamberger" onClick={this.handleClick}>
                <i
                  id="bar"
                  className={
                    this.state.clicked
                      ? "uil uil-angle-double-right"
                      : "uil uil-apps times"
                  }
                ></i>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Nav;
