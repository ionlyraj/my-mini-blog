import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { editBlog, deleteBlog } from '../actions/blogs';

const EditBlogPage = (props) => (
  <div>
    Editing page {props.match.params.id}
    <BlogForm 
      blog = {props.blog}
      onSubmit={(blog) => {
      props.dispatch(editBlog(props.blog.id, blog))
      props.history.push('/');
      }}
    />
    <button onClick={ () => {
        props.dispatch(deleteBlog(props.blog.id))
        props.history.push('/')  
      }
    }>
      Delete
    </button>
  </div>
)
 
const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditBlogPage);
