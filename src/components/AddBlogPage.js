import React from 'react';
import BlogForm from './BlogForm';
import { connect } from 'react-redux';
import { addBlog } from '../actions/blogs';

const AddBlogPage = (props) => (
  <div>
    <h2>Add Blog</h2>
    <BlogForm onSubmit={(blog) => {
      props.dispatch(addBlog(blog));
      props.history.push('/');
    }}/>
  </div>
)

export default connect()(AddBlogPage);