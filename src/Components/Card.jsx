import React from "react";
import { Link } from "react-router-dom";
export default function Card({ title, description, dir, children }) {
    return (
        <Link to={dir}>
            <div className="w-80 text-gray-900 border-2 rounded-lg bg-green-200 shadow-md text-center m-5 mx-auto p-4 cursor-pointer ">
                {children}
                <h1 className="font-bold text-l m-1">{title}</h1>
                <p>{description}</p>
            </div>
        </Link>
    );
}
