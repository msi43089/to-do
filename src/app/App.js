import "./App.css";
import List from "../components/List";
import AddList from "../features/AddList";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";

function App() {
  return (
    <div className="App">
      <List />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-list" element={<AddList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
