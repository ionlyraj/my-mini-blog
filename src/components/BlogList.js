import React from 'react';
import { connect } from 'react-redux';
import BlogListItems from './BlogListItems';
import getVisibleBlogs from '../selectors/blogs'

const BlogList = (props) => (
  <div>
    <h1>Blog List</h1>
    {props.blogs.map(blog => {
      return <BlogListItems key={blog.id} {...blog}/>
    })}
    {props.filters.text}
  </div>
);

const mapStateToProps = (state) => {
  return {
    blogs: getVisibleBlogs(state.blogs, state.filters),
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BlogList);