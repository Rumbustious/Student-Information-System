import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Statement from "./pages/Statement";
import Certificates from "./pages/Certificates";
import GoodConduct from "./pages/GoodConduct";
import Enrollment from "./pages/Enrollment";
import Dismissal from "./pages/Dismissal";
import Departments from "./pages/Departments";
import Electrical from "./pages/Electrical";
import Architecture from "./pages/Architecture";
import Civil from "./pages/Civil";

// import ToWhomConcern from "./pages/ToWhomConcern";
// import Ifadah from "./pages/Ifadah";
// import Login from "./pages/Login";
// import "./styles/global.css";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Departments" element={<Departments />}>
                    <Route index path="electrical" element={<Electrical />} />
                    <Route path="architecture" element={<Architecture />} />
                    <Route path="civil" element={<Civil />} />
                </Route>
                <Route path="/Lists" element={<Lists />} />
                <Route path="/Certificates" element={<Certificates />} />
                <Route path="/statement" element={<Statement />} />
                <Route path="/good-conduct" element={<GoodConduct />} />
                <Route path="/enrollment" element={<Enrollment />} />
                <Route path="/dismissal" element={<Dismissal />} />
            </Routes>
        </Router>
    );
}
