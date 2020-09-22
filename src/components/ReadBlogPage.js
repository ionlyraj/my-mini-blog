import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import database from '../firebase/firebase';
import { startReadBlog } from '../actions/blogs';

const ReadBlogPage = (props) => {
  const [blog, setBlog] = useState({})

  useEffect(()=> {
    database.ref('users').once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const blogs = childSnapshot.child('blogs');
        blogs.forEach((blog) => {
          if(blog.key===props.match.params.id){
            console.log(blog.val());
            setBlog({
              id: blog.key,
              ...blog.val()
            });
          }
        })
      })
    })

    // props.dispatch(startReadBlog(props.match.params.id));
    // console.log('props.blog: ',props.blog);
    // setBlog(props.blog);
    // console.log(blog);
  }, []);

  return (
    <div>
      This is from Read blog page: {props.match.params.id}
      <h1>{blog.title}</h1>
      <p>published: {blog.createdAt}</p>
      <p>{blog.body}</p>
    </div>
  )
};

// const mapStateToProps = (state, props) => {
//   console.log('mapStateToProps: ',state);
//   return {
//     blog: state.blogs.find((blog) => {
//       return blog.id === props.match.params.id
//     })
//   }
// };

export default ReadBlogPage;
//export default connect(mapStateToProps)(ReadBlogPage);