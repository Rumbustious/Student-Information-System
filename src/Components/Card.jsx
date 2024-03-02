import React from "react";

export default function Card({ title, children }) {
    return (
        <>
            <div className="w-60 bg-green-300 text-center m-5 mx-auto p-4 cursor-pointer ">
                {children}
                {title}
            </div>
        </>
    );
}
