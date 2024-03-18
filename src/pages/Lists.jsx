import React from "react";
import officer from "../assets/officer.jpg";
export default function Lists() {
    return (
        <div className="flex bg-slate-100 h-screen">
            <div className="flex flex-col justify-center align-middle m-auto bg-white border rounded-mg shadow-md p-20 [&>*]:my-5 ">
                <h1 className="text-cyan-900 font-bold m-2 text-center text-4xl">
                    Student Lists
                </h1>
                <form className="flex flex-col justify-center text-center gap-4">
                    <label className="text-lg font-semibold">
                        Choose the department:
                    </label>
                    <input
                        list="departements"
                        name="departement"
                        id="departement"
                        className="border bg-slate-100 p-1"
                    />
                    <datalist id="departements">
                        <option value="الهندسة الكهربية " />
                        <option value="الهندسة المعمارية " />
                        <option value="الهندسة المدنية" />
                    </datalist>

                    <label className="text-lg font-semibold">
                        Choose the division:
                    </label>
                    <input
                        list="divisions"
                        name="division"
                        id="division"
                        className="border bg-slate-100 p-1"
                    />
                    <datalist id="divisions">
                        <option value="حاسبات" />
                        <option value="اتصالات" />
                        <option value="قوى والات" />
                    </datalist>

                    <label className="text-lg font-semibold">
                        Academic Year :
                    </label>
                    <input
                        list="AYear"
                        name="AcademicYear"
                        id="AcademicYear"
                        className="border bg-slate-100 p-1"
                    />
                    <datalist id="AYear">
                        <option value="الفرقة الاعدادية" />
                        <option value="الفرقة الاولى" />
                        <option value="الفرقة الثانية" />
                        <option value="الفرقة الثالثة" />
                        <option value="الفرقة الرابعة" />
                    </datalist>
                </form>
                <button
                    type="button"
                    className="w-40 px-5 py-2 mx-auto my-2 bg-blue-400 text-white text-lg border rounded-sm hover:bg-purple-400 shadow-md"
                >
                    Display
                </button>
            </div>
        </div>
    );
}
