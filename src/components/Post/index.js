import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

export default function Post() {
  useEffect(() => {
    getPost();
  }, []);
  const [post, setPost] = useState([]);
  const getPost = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts/?_limit=5").then(
      (response) => {
        setPost(response.data);
      }
    );
  };
  return (
    <div>
      {post.map((post) => (
        <Link className="link-post" to={`/${post.id}`} key={post.id}>
          <div className="post">
            <img
              className="post-img"
              src="https://images.pexels.com/photos/6084236/pexels-photo-6084236.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
