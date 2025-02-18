import React, { useState } from "react";

const Blog = () => {
  const [posts] = useState([
    { id: 1, title: "Understanding React Context", content: "A deep dive into useContext..." },
    { id: 2, title: "Scaling AWS Lambda", content: "How to optimize serverless functions..." },
  ]);

  return (
    <div className="container">
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-card">
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;