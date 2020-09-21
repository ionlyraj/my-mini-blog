import database from '../firebase/firebase';

// Add blog

export const addBlog = (blog) => {
  return {
    type: 'ADD_BLOG',
    blog
  }
};

export const startAddBlog = (blogData = {}) => {
  return (dispatch) => {
    const {
      title = '', 
      body = '', 
      createdAt = 0
    } = blogData;
    
    const blog = {title, body, createdAt};

    return database.ref('blogs').push(blog).then((ref) => {
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
  return (dispatch) => {
    return database.ref(`blogs/${id}`).update(updatesData).then(() => {
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
  return (dispatch) => {
    return database.ref(`blogs/${id}`).remove().then(() => {
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
 return (dispatch) => {
   return database.ref('blogs').once('value').then((snapshot) => {
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
