import "./App.css";
import Lists from "../components/Lists";
import AddList from "../features/AddList/AddList";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import List from "../components/List";

function App() {
  return (
    <div className="App">
      <Lists styling="nav" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-list" element={<AddList />} />
          <Route path="/lists" element={<Lists styling="body" />} />
          <Route path="/lists/:taskId" element={<List />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
