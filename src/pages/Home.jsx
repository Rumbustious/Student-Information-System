import React from "react";
import "../styles/style.css";
import image from "../assets/im4.jpg";
export default function Home() {
    return (
        <>
            <header>
                <h1>Faculty of Engineering</h1>
            </header>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Students</a>
                <a href="login.html">Admin</a>
            </nav>
            <div>
                <marquee> faculty of engineering aswan university</marquee>
            </div>
            <img src={image} alt="" />
        </>
    );
}
