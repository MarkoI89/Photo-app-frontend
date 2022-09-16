import React from "react";
import "./App.css";
import LogIn from "./pages/LoginPage.jsx";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
