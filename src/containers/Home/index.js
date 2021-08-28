import React from "react";
import Hero from "../../components/Hero";
import PostList from "../../components/PostList";
import "./style.css";

function Home() {
  return (
    <div>
      <Hero />
      <PostList />
    </div>
  );
}

export default Home;
