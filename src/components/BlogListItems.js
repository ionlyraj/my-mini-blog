import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogListItems = ({id, title, body, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{title}</h3></Link>
    <p>{body}</p>
    <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
)

export default BlogListItems;