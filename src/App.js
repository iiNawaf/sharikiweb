import "./css/App.css";
import PostCard from "./components/PostCard";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = "http://localhost:4000";

function App() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch(`${BASE_URL}/api/posts/fetchposts/individual`);
    const data = await response.json();
    setPosts(data.posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="PageBody">
        <h3 className="SectionTitle">Recent Requests</h3>
        {posts.length === 0 ? (
          <h4>No List</h4>
        ) : (
          posts.map((post, i) => {
            return <PostCard post={post} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
