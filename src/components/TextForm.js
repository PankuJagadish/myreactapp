import React, { useState } from "react";
//usestate= hook
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    //console.log("button clicked");
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    //console.log("button clicked");
    setText(text.toLowerCase());
  };

  const handleClrTxt = () => {
    //console.log("button clicked");
    setText("");
  };

  const handleCpyTxt = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    //console.log("text changed");
    setText(event.target.value);
  };

  return (
    <>
      <h2>{props.heading}</h2>
      <div className="container">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            placeholder="Enter your text here"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-success mx-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-3" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success mx-3" onClick={handleClrTxt}>
          Clear text
        </button>

        <button className="btn btn-success mx-3" onClick={handleCpyTxt}>
          Copy text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary:</h2>
        <p>
          No of Words are:{text.split(" ").length} and no of characters are:
          {text.length}
        </p>
      </div>
      <div className="container my-3">
        <h3>PREVIEW</h3>
        <p>
          {text.length > 0 ? text : "enter something in the textbox to preview"}
        </p>
      </div>
    </>
  );
}
