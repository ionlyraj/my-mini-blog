import React from 'react';
import { connect } from 'react-redux';
import { deleteBlog } from '../actions/blogs';

const BlogListItems = ({dispatch, id, title, body, createdAt}) => (
  <div>
    <h3>{title}</h3>
    <p>{body}</p>
    <p>{createdAt}</p>
    <button onClick={ () => {
      dispatch(deleteBlog(id))}}>Delete</button>
  </div>
)

export default connect()(BlogListItems);