import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
    return (
        <>
            <nav className="flex p-5 gap-10 justify-center bg-blue-100 px-20">
                <CgProfile className="text-3xl text-center text-blue-500  cursor-pointer left-0	" />

                <div className=" font-bold flex gap-5 w-fit">
                    <Link
                        to="/"
                        className="relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        {" "}
                        Home
                    </Link>
                    <Link
                        to="/"
                        className="relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        {" "}
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                Departments{" "}
                                <IoIosArrowDown className="inline" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent sideOffset={8}>
                                <DropdownMenuItem asChild>
                                    <Link to="departments" className="font-bold">Departments</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="departments/electrical">
                                        Electrical Department
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="departments/architecture">
                                        Architecture Department
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="departments/civil">
                                        Civil Department
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
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
