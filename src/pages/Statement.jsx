import React from "react";
import Header from "../Components/Header.jsx";
// import Footer1 from "../BaseComponents/Footer1.jsx";
// import Subscription from "../BaseComponents/Subscription.jsx";

const handlePrint = () => {
    window.print();
};

function Statement() {
    return (
        <>
            <Header />
            <section>
                <h1>
                    <u>افادة</u>
                </h1>
                <h2>
                    <u>تفيد كلية الهندسة - جامعة اسوان</u>
                </h2>
                <p>ان الطالب:أحمد محمدمحمد</p>

                <p>
                    قد حصل على درجة البكالوريوس في الهندسة الكهربية شعبة حاسبات
                    ونظم
                </p>
                <p>% بتقدير عام جيد جدا بنسبة 78</p>
                <p>للعام الجامعي 2022</p>
                <p>
                    علما بأن الطالب المذكور سدد الرسوم كاملة وتم اعتماد النتيجة
                    من مجلس الكلية بتاريخ 5/5/2022 ومجلس الجامعة بتاريخ 9/5/2022
                </p>
                <p>وهذه افادة منا بذلك</p>
            </section>
            <br />
            <br />
            {/* <Subscription /> */}
            {/* <Footer1 /> */}
            <button onClick={handlePrint}>Print</button>
        </>
    );
}

export default Statement;
