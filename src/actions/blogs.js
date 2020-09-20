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

    database.ref('blogs').push(blog).then((ref) => {
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

// Delete blog

export const deleteBlog = (id) => {
  return {
    type: 'DELETE_BLOG',
    id
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
