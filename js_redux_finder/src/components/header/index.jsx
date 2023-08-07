import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2 className="title">Job Tracking</h2>
      <div>
        <NavLink to={"/"}>Jop List</NavLink>
        <NavLink to={"/add-jops"}>Add Jop</NavLink>
      </div>
    </header>
  );
};

export default Header;
