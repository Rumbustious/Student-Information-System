import React from "react";
import { GrCertificate } from "react-icons/gr";
import { PiUserListThin } from "react-icons/pi";
import Header from "../Components/Header";
import Card from "../Components/Card";
export default function Home() {
    return (
        <>
            <Header />
            <div>
                <div className="grid grid-cols-4">
                    <Card
                        title="Students Lists"
                        description={
                            "Get the list of students enrolled in a specific academic year."
                        }
                        dir={'/Lists'}
                    >
                        <PiUserListThin className="text-5xl m-auto text-blue-500" />
                    </Card>
                    <Card title="Get Students Desires"></Card>
                    <Card title="Extract Student Certificate">
                        <GrCertificate className="text-5xl m-auto text-blue-500" />
                    </Card>
                    <Card title="Get Degree Statement"></Card>
                </div>
            </div>
        </>
    );
}
