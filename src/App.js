import "./App.css";
import React,{useState} from "react";
import Module from "./Module";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode]=useState("light")
  const togglemode=()=>{
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor="#042743";
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode}></Navbar>
      
      {/* <Navbar></Navbar> */}
      <div className="container my-3"> 
      <TextForm heading="Enter The Text To Analyze Below" mode={mode}></TextForm>
      <About></About>
      <Module></Module>
      </div>
    </>
  );
}

export default App;