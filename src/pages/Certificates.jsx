import React from "react";
import { useNavigate } from "react-router-dom";
import officer from "../assets/officer.jpg";
import "../styles/ex-style.css";

export default function Certifcates() {
    const navigateTo = useNavigate();

    function submitForm() {
        const certificate = document.getElementById("certificate").value;
        if (certificate === "To-Whom-Concern") {
            navigateTo("/To-Whom-Concern");
        } else if (certificate === "statement") {
            navigateTo("/statement");
        } else if (certificate === "Good-Conduct") {
            navigateTo("/good-conduct");
        } else if (certificate === "Enrollment") {
            navigateTo("/enrollment");
        } else if (certificate === "Dismissal") {
            navigateTo("/dismissal");
        }
    }

    const certifacateTypes = [
        { id: 1, name: "الى من يهمه الامر", value: "To-Whom-Concern" },
        { id: 2, name: "بيان درجات", value: "Grade-Statement" },
        {
            id: 3,
            name: "شهادة تخرج مؤقتة",
            value: "Temporary-Graduation",
        },
        { id: 4, name: "شهادة قيد", value: "Enrollment" },
        { id: 5, name: "شهادة حسن سير وسلوك", value: "Good-Conduct" },
        { id: 6, name: "شهادة فصل", value: "Dismissal" },
        { id: 7, name: "افادة", value: "Statement" },
        { id: 8, name: "شهادة تخرج", value: "Graduation" },
    ];
    return (
        <div className="flex bg-slate-100">
            <img
                src={officer}
                className="h-screen w-[50%] bg-cover"
                alt="Officer Image"
            />
            <div className="flex flex-col justify-center align-middle m-auto bg-white border rounded-mg shadow-md p-20 [&>*]:my-5 g ">
                <h1 className="text-cyan-900 font-bold m-2 text-center text-4xl">
                    Student Certifcate
                </h1>
                <form className="flex flex-col justify-center text-center gap-4">
                    <label className="text-lg font-semibold ">
                        Choose Certificate type
                    </label>
                    <input
                        list="certificates"
                        name="certificate"
                        id="certificate"
                        className="border bg-slate-100 p-1"
                    />
                    <datalist id="certificates">
                        {certifacateTypes.map((certificate) => (
                            <option
                                key={certificate.id}
                                value={certificate.value}
                            >
                                {certificate.name}
                            </option>
                        ))}
                    </datalist>

                    <label className="text-lg font-semibold">National ID</label>
                    <input
                        type="text"
                        id="nationalID"
                        placeholder="National ID"
                        required
                        className="border bg-slate-100 p-1"
                    />
                    <button
                        type="button"
                        className="w-40 px-5 py-2 mx-auto my-2 bg-blue-400 text-white text-lg border rounded-sm hover:bg-purple-400 shadow-md"
                        onClick={submitForm}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
