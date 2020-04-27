import React from "react";
import data from "../data.json";

const ComplexList = () => (

    <ul >
        {data.map((item) => (
            <div className="DataList">
                <li key={item.id}>
                    <div>Id: {item.id}</div>
                    <div>First Name: {item.first_name}</div>
                    <div>Email: {item.email}</div>
                    <div>Country: {item.country}</div>
                </li>
            </div>
        ))}
    </ul>

);

export default ComplexList;