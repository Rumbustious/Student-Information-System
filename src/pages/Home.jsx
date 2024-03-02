import React from "react";
import Header from "../Components/Header";
import image from "../assets/backgroundHome.jpg";
import Card from "../Components/Card";
export default function Home() {
    return (
        <>
            <Header />
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    opacity: "0.8",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <Card title="Get Graduation Certificate" />
                <Card title="Get the Result" />
            </div>
        </>
    );
}
