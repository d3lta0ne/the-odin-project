import React from "react";
import "./styles/App.css";
import BookShelf from "./components/BookShelf";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BookShelf />
    </div>
  );
}

export default App;
