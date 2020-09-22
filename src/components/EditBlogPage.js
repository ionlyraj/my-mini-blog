import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startEditBlog, startDeleteBlog } from '../actions/blogs';

const EditBlogPage = (props) => (
  <div>
    <p>Post readable at: https://my-mini-blog-reactapp.herokuapp.com/read/{props.match.params.id}</p>
    <BlogForm 
      blog = {props.blog}
      onSubmit={(blog) => {
      props.dispatch(startEditBlog(props.blog.id, blog))
      props.history.push('/');
      }}
    />
    <button onClick={ () => {
        props.dispatch(startDeleteBlog(props.blog.id))
        props.history.push('/')  
      }
    }>
      Delete
    </button>
  </div>
);
 
const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id
    })
  }
};

export default connect(mapStateToProps)(EditBlogPage);
