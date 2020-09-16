import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>My Mini Blog</h1>
    <Link to='/'>dashboard</Link>
    <Link to='/create'>Add Blog</Link>
    <Link to='/read'>Read Blog</Link>
  </header>
);

export default Header;