import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <Link className='header__title' to='/dashboard'>
          <h1>My Mini Blog</h1>
        </Link>
        <button className='button button--link' onClick={() => {
          props.dispatch(startLogout())
        }}>Logout</button>
      </div>
    </div>
  </header>
);

export default connect()(Header);
