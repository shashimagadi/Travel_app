import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link, withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
  // Make Handleclick Function
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  n = () => {
    this.props.history.push("/signin");
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {/* <a>
            <i className="fa-solid fa-house-user"></i> Home
          </a> */}
          {MenuItems.map((item, index) => {
            return (
              <li>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/signin">
            <button>Sign up</button>
          </Link>
          {/* <button >Sign up</button> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
