import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Ifadah from "./pages/Ifadah";
// import Degree from "./pages/Degree";
// import Login from "./pages/Login";
// import "./styles/global.css";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/ifadah" element={<Ifadah />} />
                <Route path="/degree" element={<Degree />} />
                <Route path="/login" element={<Login />} /> */}
            </Routes>
        </Router>
    );
}
