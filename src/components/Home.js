import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to the To-Do List App</h2>
      <Link to="/create-list">
        <button>Lets get started</button>
      </Link>
    </div>
  );
}
