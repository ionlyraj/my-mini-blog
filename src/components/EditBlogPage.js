import React from 'react';

const EditBlogPage = (props) => (
  <div>
    Editing page {props.match.params.id}
  </div>
)

export default EditBlogPage;