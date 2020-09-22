import database from '../firebase/firebase';

// Add blog

export const addBlog = (blog) => {
  return {
    type: 'ADD_BLOG',
    blog
  }
};

export const startAddBlog = (blogData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '', 
      body = '', 
      createdAt = 0
    } = blogData;
    
    const blog = {title, body, createdAt};

    return database.ref(`users/${uid}/blogs`).push(blog).then((ref) => {
      dispatch(addBlog({
        id: ref.key,
        ...blog
      }));
    })
  }
};

// Edit blog

export const editBlog = (id, updates) => {
  return {
    type: 'EDIT_BLOG',
    id,
    updates
    }
};

export const startEditBlog = (id, updatesData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/blogs/${id}`).update(updatesData).then(() => {
      dispatch(editBlog(
        id,
        updatesData
      ))
    })
  }
};

// Delete blog

export const deleteBlog = (id) => {
  return {
    type: 'DELETE_BLOG',
    id
  }
};

export const startDeleteBlog = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/blogs/${id}`).remove().then(() => {
      dispatch(deleteBlog(id))
    })
  }
};

//Set blog

export const setBlogs = (blogs) => {
  return {
    type: 'SET_BLOGS',
    blogs
  }
};

export const startSetBlogs = () => {
 return (dispatch, getState) => {
   const uid = getState().auth.uid;
   return database.ref(`users/${uid}/blogs`).once('value').then((snapshot) => {
    const blogs = [];
    snapshot.forEach((childSnapshot) => {
      blogs.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    dispatch(setBlogs(blogs));
  })
 }
};

export const readBlog = (blog) => {
  return {
    type: 'READ_BLOG',
    blog
  }
};

export const startReadBlog = (id) => {
  return (dispatch) =>{
    return database.ref('users').once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const blogs = childSnapshot.child('blogs');
        blogs.forEach((blog) => {
          if(blog.key===id){
            console.log(blog.val());
            dispatch(readBlog({
              id: blog.key,
              ...blog.val()
            }));
          }
        })
      })
    })
  }
};