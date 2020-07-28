imo;
import React from "react";
import { useSelector } from "react-redux";

const libary = useSelector((state) => state.libary);

const BookShelf = () => {
  return (
    <div className="bookshelf">
      {libary.map((book) => {
        <Book book={book} />;
      })}
    </div>
  );
};

export default BookShelf;
