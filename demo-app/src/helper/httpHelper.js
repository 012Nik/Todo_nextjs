// import axios from "axios";
// export const httpAxios = axios.create({
//     baseURL:process.env.BASE_URL,
// })

import axios from "axios";

const defaultBaseUrl = "http://localhost:3000"; // Replace with your default base URL

export const httpAxios = axios.create({
    baseURL: process.env.BASE_URL || defaultBaseUrl,
});