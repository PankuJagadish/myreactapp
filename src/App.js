//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [modeName, setmodeName] = useState("Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setmodeName("Light Mode");
      setMode("dark");
      setstyleName({
        color: "white",
      });
    } else {
      setMode("light");
      setmodeName("Dark Mode");
      setstyleName({
        color: "black",
      });
    }
  };
  const [styleName, setstyleName] = useState({
    color: "black",
  });

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="about"
        mode={mode}
        toggleMode={toggleMode}
        modeName={modeName}
        getStyle={styleName}
      />
      <div className="container my-3">
        <TextForm heading="Enter Yout Text Here" />
      </div>
    </>
  );
}

export default App;
