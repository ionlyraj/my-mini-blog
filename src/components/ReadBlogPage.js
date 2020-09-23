import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const ReadBlogPage = (props) => {
  const [blog, setBlog] = useState({})

  useEffect(() => {
    setBlog(props.blog);
  }, [props.blog]);

  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>{blog.title}</h1>
          <p className='page-header__sub-title'>Published: {moment(blog.createdAt).format('MMMM Do, YYYY')}</p>
        </div>
      </div>
      <div className='content-container'>
        <p>{blog.body}</p>
      </div>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  console.log('mapStateToProps: ', state);
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id
    })
  }
};

// const mapDispatchToProps = (dispatch) => ({
//   startReadBlog : (id) => dispatch(startReadBlog(id))
// })

//export default ReadBlogPage;
export default connect(mapStateToProps)(ReadBlogPage);