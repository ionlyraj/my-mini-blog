import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItems = ({id, title, body, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{title}</h3></Link>
    <p>{body}</p>
    <p>{createdAt}</p>
  </div>
)

export default BlogListItems;