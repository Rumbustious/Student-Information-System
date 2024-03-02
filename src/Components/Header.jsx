import React from "react";
import UniversityLogo from "../assets/universityLogo.png";
import CollegeLogo from "../assets/collegeLogo.png";
import Navbar from "./Navbar";
export default function Header() {
    return (
        <header>
            <div className="flex justify-between bg-blue-300 p-2">
                <img src={UniversityLogo} alt="University Logo" width={60} />
                <h1 className="font-black m-auto text-neutral-50 text-2xl">
                    Faculty of Engineering
                </h1>
                <img
                    src={CollegeLogo}
                    alt="College Logo"
                    width={75}
                    height={50}
                />
            </div>
            <Navbar />
        </header>
    );
}
