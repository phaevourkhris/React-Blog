import React from "react";
import Post from "../Post";
import "./style.css";

export default function PostList() {
  return (
    <div className="postList">
      <h2 className="title">Recent Posts</h2>
      <Post />
      {/* <Post />
      <Post />
      <Post /> */}
    </div>
  );
}
