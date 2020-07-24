import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    /**
     * Notice the e.preventDefault(); statement. This statement prevents the default
     * behavior of the form, which, by default, reloads the page when submitted. In
     * JavaScript we would use return false; for that, but in React we need to call
     * preventDefault().
     */
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={num} onChange={handleChange} />
      <input type="submit" value="Add" />
      <p> Sum is {sum} </p>
    </form>
  );
}

const el = <AddForm />;
ReactDOM.render(el, document.getElementById("root"));
