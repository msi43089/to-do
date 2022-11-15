import "./App.css";
import List from "../components/List";
import AddList from "../features/AddList";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Lists from "../components/Lists";

function App() {
  return (
    <div className="App">
      <List styling="nav" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-list" element={<AddList />} />
          <Route path="/lists" element={<Lists />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
