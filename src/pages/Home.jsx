import React from "react";
import { GrCertificate } from "react-icons/gr";
import { BsJournalCheck } from "react-icons/bs";
import { PiUserListThin } from "react-icons/pi";
import { CgTranscript } from "react-icons/cg";

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
                        dir={"/Lists"}
                    >
                        <PiUserListThin className="text-5xl m-auto text-blue-500" />
                    </Card>
                    <Card
                        title="Students Desires"
                        description={"The students registered desires"}
                    >
                        <BsJournalCheck className="text-4xl m-auto text-blue-500" />
                    </Card>
                    <Card
                        title="Student Certificate"
                        description={
                            "Extract a certificate using the student national ID"
                        }
                        dir={"/Certificates"}
                    >
                        <GrCertificate className="text-4xl m-auto text-blue-500" />
                    </Card>
                    <Card
                        title="Degree Statement"
                        description={
                            "akldfjal alskdjfakljd adslkjfa vzcl twrtwkljm jfsldg"
                        }
                    >
                        <CgTranscript className="text-4xl m-auto text-blue-500" />
                    </Card>
                </div>
            </div>
        </>
    );
}
