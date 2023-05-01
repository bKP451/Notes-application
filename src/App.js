import { React } from "react";
import "./Components/css/App.css";
import Header from "./Components/NotesComponents/Header";
import Notes from "./Components/NotesComponents/Notes";
function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
export default App;