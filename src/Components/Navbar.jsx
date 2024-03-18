import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    return (
        <>
            <nav className="flex p-5 gap-10 justify-center bg-blue-50">
                <CgProfile className="text-3xl text-center text-blue-500 mr-auto " />

                <Link to="/" className="ml-auto">
                    {" "}
                    Home
                </Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}
