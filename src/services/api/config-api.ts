import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    timeout: Number(process.env.REACT_APP_TIMEOUT_API),
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
});