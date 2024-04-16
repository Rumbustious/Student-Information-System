import React from "react";
import Header from "../Components/Header";
// import officer from "../assets/officer.jpg";
export default function Lists() {
    function submitForm() {
        console.log("hello");
    }
    return (
        <>
            <Header />

            <div className="flex bg-slate-100 h-screen">
                <div className="flex flex-col justify-center align-middle m-auto bg-white border rounded-mg shadow-md p-20 [&>*]:my-5 ">
                    <h1 className="text-cyan-900 font-bold m-2 text-center text-4xl">
                        Student Lists
                    </h1>
                    <form className="flex flex-col justify-center text-center gap-4">
                        <label className="text-lg font-semibold">
                            Choose the department:
                        </label>
                        <select
                            list="departements"
                            name="departement"
                            id="departement"
                            className="border bg-slate-100 p-1 w-72"
                        >
                            <option value="">اختر القسم</option>

                            <option value="الهندسة الكهربية">
                                الهندسة الكهربية
                            </option>
                            <option value="الهندسة المعمارية ">
                                الهندسة المعمارية
                            </option>
                            <option value="الهندسة المدنية">
                                الهندسة المدنية
                            </option>
                        </select>

                        <label className="text-lg font-semibold">
                            Choose the division:
                        </label>
                        <select
                            list="divisions"
                            name="division"
                            id="division"
                            className="border bg-slate-100 p-1"
                        >
                            <option value="">اختر الشعبة</option>
                            <option value="حاسبات">حاسبات</option>
                            <option value="اتصالات">اتصالات</option>
                            <option value="قوى والات">قوى والات</option>
                        </select>

                        <label className="text-lg font-semibold">
                            Academic Year:
                        </label>
                        <select
                            list="AYear"
                            name="AcademicYear"
                            id="AcademicYear"
                            className="border bg-slate-100 p-1"
                        >
                            <option value="">اختر السنة الدراسية</option>
                            <option value="الفرقة الاعدادية">
                                الفرقة الاعدادية
                            </option>
                            <option value="الفرقة الاولى">الفرقة</option>
                            <option value="الفرقة الثانية">
                                الفرقة الثانة
                            </option>
                            <option value="الفرقة الثالثة">
                                الفرقة الثالثة
                            </option>
                            <option value="الفرقة الرابعة">
                                الفرقة الرابعة
                            </option>
                        </select>
                    </form>
                    <button
                        type="button"
                        className="w-40 px-5 py-2 mx-auto my-2 bg-blue-400 text-white text-lg border rounded-sm hover:bg-purple-400 shadow-md"
                        onClick={submitForm}
                    >
                        Display
                    </button>
                </div>
            </div>
        </>
    );
}
