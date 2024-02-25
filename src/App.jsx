import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import image from "./assets/im4.jpg";
import Home from "./pages/Home";
import Ifadah from "./pages/Ifadah";
import Degree from "./pages/Degree";
import Login from "./pages/Login";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/ifadah" element={<Ifadah />} />
                <Route path="/degree" element={<Degree />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}
