import React from "react";
import officer from "../assets/officer.jpg";
export default function Lists() {
    return (
        <>
            <div class="image">
                <img src={officer} alt="Officer Image" />
            </div>
            <div class="container">
                <h1>
                    <b>Student Lists</b>
                </h1>
                <form action="#" method="post">
                    <label>Choose the department:</label>
                    <input
                        list="departements"
                        name="departement"
                        id="departement"
                    />
                    <datalist id="departements">
                        <option value="الهندسة الكهربية " />
                        <option value="الهندسة المعمارية " />
                        <option value="الهندسة المدنية" />
                    </datalist>

                    <label>Choose the division:</label>
                    <input list="divisions" name="division" id="division" />
                    <datalist id="divisions">
                        <option value="حاسبات" />
                        <option value="اتصالات" />
                        <option value="قوى والات" />
                    </datalist>

                    <label>Academic Year :</label>
                    <input list="AYear" name="AcademicYear" id="AcademicYear" />
                    <datalist id="AYear">
                        <option value="الفرقة الاعدادية" />
                        <option value="الفرقة الاولى" />
                        <option value="الفرقة الثانية" />
                        <option value="الفرقة الثالثة" />
                        <option value="الفرقة الرابعة" />
                    </datalist>
                </form>
                <button type="button" onclick="submitForm()">
                    Display
                </button>
            </div>
        </>
    );
}
