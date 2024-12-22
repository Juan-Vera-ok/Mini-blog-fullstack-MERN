import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/get-posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/add-post', {
        title,
        content,  
      });
      setPosts([...posts, response.data ]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <div>
      <h1>Mini Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>

      <div className="post-grid">
        {posts.map((post) => (
          <div className="post-card" key={post._id}>
            <img src={post.content} alt={post.title} />
            <div className="post-card-content">
              <h2>{post.title}</h2>
              {post.content && !post.content.includes("http") ? (
                <p>{post.content}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


