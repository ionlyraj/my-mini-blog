import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='.box-layout__title'>My Mini Blog</h1>
      <p>Create your own blog and post anywhere</p>
      <button className='button' onClick={() => {
        props.dispatch(startLogin())
      }}>
        Login with Google
      </button>
    </div> 
  </div>
);

export default connect()(LoginPage);