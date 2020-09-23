import React from 'react';
import BlogForm from './BlogForm';
import { connect } from 'react-redux';
import { startAddBlog } from '../actions/blogs';

const AddBlogPage = (props) => (
  <div>
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-headr__title'>Add Blog</h1>
      </div>
    </div>
    <div className='content-container'>
      <BlogForm onSubmit={(blog) => {
        props.dispatch(startAddBlog(blog));
        props.history.push('/');
      }}/>
    </div>
  </div>
);

export default connect()(AddBlogPage);
