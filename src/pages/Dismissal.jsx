import Header from "../../../../src/src/BaseComponents/Header.jsx";
// import Subscription from "../../../../src/src/BaseComponents/Subscription.jsx";
// import Footer1 from "../../../../src/src/BaseComponents/Footer1.jsx";

function Dismissal() {
    return (
        <>
            <Header />
            <section>
                <h1>
                    <u>شهادة فصل</u>
                </h1>
                <h2>
                    <u> تفيد كلية الهندسة- جامعة اسوان</u>
                </h2>
                <p>
                    ان الطالب:&nbsp;&nbsp;&nbsp;&nbsp;احمد
                    محمد&nbsp;&nbsp;&nbsp;
                </p>
                <p> كان مقيد لدينا بالكلية بالفرقة الاعدادية</p>
                <p>العام الجامعى 2015/2018 (مستجد)-</p>
                <p>العام الجامعى 2015/2018 (باق للاعادة)-</p>
                <p>
                    {" "}
                    وقد استنفذ مرات الرسوب وذلك طبقا للوائح علما بان الطالب
                    المذكور سدد الرسوم كاملة{" "}
                </p>
                <p> وهذه افادة منا بذلك </p>
            </section>
            {/* <Subscription /> */}
            {/* <Footer1 /> */}
        </>
    );
}

export default Dismissal;
