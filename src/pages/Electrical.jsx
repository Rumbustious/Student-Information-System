import React from "react";
import officer from "../assets/officer.jpg";
export default function Electrical() {
    return (
        <div>
            <h1 className="text-4xl text-center p-4 ">Electrical Department</h1>
            <div className="grid lg:grid-cols-3 p-4 mx-10">
                <div className="col-span-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique ullam vitae sit esse tenetur nobis officiis
                        incidunt debitis itaque consectetur autem provident
                        animi dolorem, voluptatum cumque distinctio, nulla
                        deserunt natus iure quidem inventore a nostrum quasi. Ex
                        labore esse deleniti. Impedit tenetur laborum sequi,
                        cupiditate vitae quod quisquam vero odit?
                    </p>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                    </ul>
                </div>
                <img src={officer} alt="" />
            </div>
        </div>
    );
}
