// Get visible blogs

const getVisibleBlogs = (blogs, {text, sortBy}) => {
  return blogs.filter(blog => {
    return blog.title.toLowerCase().includes(text.toLowerCase()) ||
    blog.body.toLowerCase().includes(text.toLowerCase());
  }).sort((a, b) => {
    if(sortBy === 'date')
      return a.createdAt < b.createdAt ? 1 : -1;
    else if (sortBy === 'title')
      return a.title < b.title ? -1 : 1;
  });
};

export default getVisibleBlogs;