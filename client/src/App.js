import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NikkahPage from "./pages/NikkahPage";
import WeddingPage from "./pages/WeddingPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nikkah" element={<NikkahPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/" element={<Navigate replace to="/nikkah" />} />
      </Routes>
    </Router>
  );
}

export default App;
