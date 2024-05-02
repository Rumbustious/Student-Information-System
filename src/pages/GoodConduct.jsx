import React from "react";
import Header from "../Components/Header.jsx";

function GoodConduct() {
    return (
        <div>
            <Header />
            <div
                dir="rtl"
                className="p-10  m-10 border-black border-2 rounded-md"
            >
                <div>
                    <h1 className=" text-5xl font-bold text-center underline">
                        شهادة حسن سير وسلوك
                    </h1>
                    <h2 className="text-2xl font-semibold">
                        {" "}
                        تشهد كلية الهندسة بأن:
                    </h2>
                    <h3 className="text-center font-bold text-4xl">
                        {"أحمد محمد"}
                    </h3>

                    <p className="font-semibold text-center">
                        قد حصل على درجة البكالوريوس في {"الهندسة الكهربية"}
                        {"شعبة اتصالات"}
                        <br />
                        حيث التحق بالكلية
                        <span className="font-bold m-3">{"2010/2011"}</span>
                        حتى
                        <span className="font-bold m-3">{"2015/2016"}</span>
                        <br />
                        ولم يوقع عليه اى جزاء قانوني او تأديبي
                        <br />و قد أعطي له هذا بناء على طلبه وذلك لتقديمها الى
                        من يهمه الأمر
                        <br />
                        دون ادنى مسؤلية على الكلية
                    </p>
                </div>
            </div>
            <div className="w-screen flex justify-center">
                <button className="content-center font-bold px-5 py-2 bg-purple-400 text-white text-lg border rounded-sm hover:bg-blue-400 shadow-md">
                    print
                </button>
            </div>
        </div>
    );
}
export default GoodConduct;
