import React from 'react';
import {Link} from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="nav linkHome">
      <Link className="linkHome" to="/">Home</Link>
      <Link className="linkHome" to="/languages">Languages</Link>
      <Link className="linkHome" to="/contact">Contact</Link>
    </div>
  );
};

export default NavBar;