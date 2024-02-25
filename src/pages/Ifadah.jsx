import React from "react";
import "../styles/ifadahStyle.css";
import universityLogo from "../assets/universityLogo.png";
import ColegeLogo from "../assets/ColegeLogo.png";
export default function Ifadah() {
    return (
        <>
            <header className="header">
                <div>
                    <img src={universityLogo} />
                </div>
                <div>
                    <h3>جامعة اسوان </h3>
                    <h3>كلية الهندسة </h3>
                    <h3>شئون الطلاب</h3>
                </div>
                <div>
                    <img src={ColegeLogo} />
                </div>
            </header>
            <section className="section">
                <h1>
                    <u>افادة</u>
                </h1>
                <h2>
                    <u>تفيد كلية الهندسة - جامعة اسوان</u>
                </h2>
                <p>
                    {" "}
                    ان الطالب:
                    <input type="text" id="name" placeholder=" اسم الطالب" />
                </p>

                <p>
                    قد حصل على درجة البكالوريوس في الهندسة
                    <input type="text" id="department" placeholder=" القسم" />
                    -الشعبة
                    <input type="text" id="Division" placeholder="الشعبة" />
                </p>
                <p>
                    بتقدير عام
                    <input type="text" id="degree" placeholder=" التقدير" />
                    بنسبة
                    <input type="text" id="percentage" placeholder=" النسبة" />%
                </p>
                <p>
                    للعام الجامعي
                    <input type="text" id="year" placeholder="سنة التخرج" />
                </p>
                <p>
                    علما بان الطالب المذكور سدد الرسوم كاملة وتم اعتماد النتيجة
                    من مجلس الكلية بتاريخ <input type="text" id="date1" />
                    ومجلس الجامعة بتاريخ
                    <input type="text" id="date2" />
                </p>
                <p>وهذه افادة منا بذلك</p>
                <p>
                    الموظف المختص <input type="text" />
                    مسجل الكلية <input type="text" />
                    عميد الكلية <input type="text" />
                </p>
            </section>
            <br />
            <br />
            <footer className="footer">
                <div>
                    <p>محافظة اسوان -كلية الهندسة -ابو الريش</p>
                    <p>صندوق بريد رقم :81542</p>
                    <p>تليفون:0974661403</p>
                    <p>فاكس:0974661406</p>
                    <p>البريد الالكتروني:IT_eng@aswu.edu.eg</p>
                </div>
            </footer>
        </>
    );
}
