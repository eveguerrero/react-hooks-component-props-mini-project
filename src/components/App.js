import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList"
import Header from "./Header";
import About from "./About"

const sentence = "Let's get coding"
function App() {
const {name, image, about, posts} = blogData
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name ={name} ></Header>
      <About image = {image} about= {about}></About>
      <ArticleList posts = {posts}></ArticleList>
    </div>
  );
}

export default App;

