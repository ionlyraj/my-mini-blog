import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header>
    <h1>My Mini Blog</h1>
    <Link to='/dasboard'>dashboard</Link>
    <Link to='/create'>Add Blog</Link>
    <button onClick={() => {
      props.dispatch(startLogout())
    }}>Logout</button>
  </header>
);

export default connect()(Header);
