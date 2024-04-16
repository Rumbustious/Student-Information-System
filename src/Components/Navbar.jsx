import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    return (
        <>
            <nav className="flex p-5 gap-10 justify-center bg-blue-100 px-20">
                <CgProfile className="text-3xl text-center text-blue-500 mr-auto cursor-pointer" />

                <div className="ml-auto font-bold flex gap-5 w-fit">
                    <Link
                        to="/"
                        className="relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        {" "}
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        About
                    </Link>
                </div>
            </nav>
        </>
    );
}

// https://dev.to/vincentdorian/cool-nav-link-hover-animations-with-tailwindcss-3gf2
// https://www.youtube.com/watch?v=9Qzmri1WaaE
