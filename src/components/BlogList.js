import React from 'react';
import { connect } from 'react-redux';
import BlogListItems from './BlogListItems';
import getVisibleBlogs from '../selectors/blogs'

const BlogList = (props) => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-desktop'>Blog List</div>
    </div>
    <div className='list-body'>
      {
        props.blogs.length === 0 ? (
          <div className='list-item list-item--message'>
            <span>No blogs</span>
          </div>
        ) :
        (props.blogs.map(blog => {
          return <BlogListItems key={blog.id} {...blog}/>
        }))
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    blogs: getVisibleBlogs(state.blogs, state.filters)
  }
}

export default connect(mapStateToProps)(BlogList);