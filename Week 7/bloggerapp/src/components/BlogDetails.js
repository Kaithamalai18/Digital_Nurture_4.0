import React from 'react';

const BlogDetails = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <p>No blogs available</p>;
  } else {
    return (
      <div className="box">
        <h1>Blog Details</h1>
        {blogs.map((blog, idx) => (
          <div key={idx}>
            <h2>{blog.title}</h2>
            <strong>{blog.author}</strong>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default BlogDetails;
