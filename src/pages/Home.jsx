import React from "react";
import { GrCertificate } from "react-icons/gr";
import { PiUserListThin } from "react-icons/pi";

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
                <div className="grid grid-cols-4 gap-2">
                    <Card title="Get Student Results">
                        <GrCertificate className="text-5xl m-auto" />
                    </Card>
                    <Card title="Get Students Lists">
                        <PiUserListThin className="text-5xl m-auto" />
                    </Card>
                    <Card title="Get Student Results">
                        <GrCertificate className="text-5xl m-auto" />
                    </Card>
                    <Card title="Get Students Lists">
                        <PiUserListThin className="text-5xl m-auto" />
                    </Card>
                    <Card title="Get Student Results">
                        <GrCertificate className="text-5xl m-auto" />
                    </Card>
                    <Card title="Get Students Lists">
                        <PiUserListThin className="text-5xl m-auto" />
                    </Card>
                    <Card title="Get Student Results">
                        <GrCertificate className="text-5xl m-auto" />
                    </Card>
                    <Card title="Get Students Lists">
                        <PiUserListThin className="text-5xl m-auto" />
                    </Card>
                </div>
            </div>
        </>
    );
}
