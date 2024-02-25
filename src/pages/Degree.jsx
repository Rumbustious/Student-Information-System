import React from "react";
import "../styles/degreeStyle.css";
import officer from "../assets/officer.jpg";

export default function Degree() {
    function submitForm() {
        var certificateType = document.getElementById("certificate").value;
        var nationalID = document.getElementById("nationalID").value;

        if (certificateType === "افادة" && nationalID !== "") {
            window.location.href = "page1.html";
        } else {
            alert("Please fill in both certificate type and national ID.");
        }
    }
    return (
        <div className="flex">
            <div class="image">
                <img src={officer} alt="officer" />
            </div>
            <div class="container">
                <h1>
                    <b>Enter Student Details</b>
                </h1>
                <form action="your_action_here" method="post">
                    <label for="certificate">
                        Choose the certificate type:
                    </label>
                    <input
                        list="certificates"
                        name="certificate"
                        id="certificate"
                    />
                    <datalist id="certificates">
                        <option value="الى من يهمه الامر" />
                        <option value="بيان درجات" />
                        <option value="شهادة تخرج مؤقتة" />
                        <option value="شهادة قيد" />
                        <option value="شهادة حسن سير وسلوك" />
                        <option value="شهادة فصل" />
                        <option value="افادة" />
                    </datalist>
                </form>

                <label for="nationalID">National ID</label>
                <input
                    type="text"
                    id="nationalID"
                    placeholder="National ID"
                    required
                />

                <br />
                <br />
                <button onClick={submitForm}>Submit</button>
            </div>
        </div>
    );
}
