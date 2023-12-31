import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg"
      style={{ background: "white", color: "white" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/">
          Banking System
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        <form className="form-inline my-2 my-lg-0">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/UsersList">
                Customers
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/transactions">
                Transactions
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/NewUser">
                New Customer
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
}
    

      // </nav>
  


export default Navbar

