import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function MyList(props) {
  const arr = props.data;
  /**
   * Keys are important, because they uniquely identify elements, helping
   * React understand which items have changed, are added, or are removed.
   */
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];
const el = <MyList data={arr} />;

ReactDOM.render(el, document.getElementById("root"));
