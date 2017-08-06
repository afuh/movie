import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to ="/" className="nav">Home</Link>
    </nav>
  )
}

export default Nav;
