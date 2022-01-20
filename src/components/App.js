import React from "react";
import ArticleList from "./ArticleList"
import Header from "./Header";
import About from "./About"

const sentence = "Let's get coding"

function App() {
  return (
    <React.Fragment>
    <Header />
    <About image="https://via.placeholder.com/215" sentence={sentence}/>
    <ArticleList />
   
    </React.Fragment>
  );
}

export default App;
