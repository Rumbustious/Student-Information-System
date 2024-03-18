import Header from "../Components/Header.jsx";
// import Subscription2 from "../BaseComponents/Subscription2.jsx";

function Enrollment() {
    return (
        <>
            <Header />
            <section>
                <h1>
                    <u>شهادة قيد</u>
                </h1>
                <div className="RegCertificate">
                    <p>
                        {" "}
                        <strong> تشهد الكلية بان الطالب:</strong>{" "}
                        <span className="dotted">احمد محمد محمود</span>
                    </p>

                    <p>
                        {" "}
                        <strong> مقيد بالفرقة</strong>{" "}
                        <span className="dotted">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;الرابعة&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <strong> فى العام الجامعى</strong>{" "}
                        <span class="dotted">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2024/2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>{" "}
                    </p>
                    <p>
                        <strong> شعبة</strong>{" "}
                        <span className="dotted">اتصالات</span>
                    </p>
                    <p>
                        <strong>
                            {" "}
                            و هذه شهادة منا بذلك اعطيت بناء على طلبه لتقديمها
                            الي
                        </strong>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br />{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
            </section>
            {/* <footer><Subscription2 /></footer> */}
        </>
    );
}
export default Enrollment;
