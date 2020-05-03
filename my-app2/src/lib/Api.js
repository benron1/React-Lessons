import React from "react";
import axios from "axios";


export function getData() {
    const response = axios.get(`https://5dd14f8d15bbc2001448d07d.mockapi.io/products/`);
    return response
}

export async function DeleteID(id) {
    await axios
        .delete(`https://5dd14f8d15bbc2001448d07d.mockapi.io/products/${id}`)
        .then((response) => {
            console.log(response);
        });
}

export async function postNewId(UserName) {
    await axios
        .post(`https://5dd14f8d15bbc2001448d07d.mockapi.io/products/`, {
            name: `${UserName}`,
        })
        .then(function (response) {
            console.log("dgd")
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}