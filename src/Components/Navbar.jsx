import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex p-5 gap-10 justify-center bg-orange-50">
            <Link to="/"> Home</Link>
            <Link to="/about">About</Link>
            <Link to="/students">Students</Link>
            <Link to="/admin">Admin</Link>
        </nav>
    );
}
