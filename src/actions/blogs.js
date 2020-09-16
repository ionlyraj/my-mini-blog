import { v4 as uuidv4 } from 'uuid';
// Add blog

export const addBlog = ({title = '', body = '', createdAt = 0} = {}) => {
  return {
    type: 'ADD_BLOG',
    blog: {
      id: uuidv4(),
      title,
      body,
      createdAt
    }
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
