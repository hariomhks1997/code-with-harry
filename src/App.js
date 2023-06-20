import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"></Navbar>
      
      {/* <Navbar></Navbar> */}
      <div className="container my-3">
      <TextForm heading="Enter The Text To Analyze Below"></TextForm>
      </div>
    </>
  );
}

export default App;
 