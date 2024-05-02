import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Statement from "./pages/Statement";
import Certificates from "./pages/Certificates";
import GoodConduct from "./pages/GoodConduct";
import Enrollment from "./pages/Enrollment";
import Dismissal from "./pages/Dismissal";
// import ToWhomConcern from "./pages/ToWhomConcern";
// import Ifadah from "./pages/Ifadah";
// import Login from "./pages/Login";
// import "./styles/global.css";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Lists" element={<Lists />} />
                <Route path="/Certificates" element={<Certificates />} />
                <Route path="/statement" element={<Statement />} />
                <Route path="/good-conduct" element={<GoodConduct />} />
                <Route path="/enrollment" element={<Enrollment />} />
                <Route path="/dismissal" element={<Dismissal />} />
                
            </Routes>
        </Router>
    );
}
