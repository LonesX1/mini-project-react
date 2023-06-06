import { BASE_URL } from "../static/constants.js";
import { getToken } from "../mixins/getToken.js";
import axios from "axios";

const headers = (token) => { 
    
    return {
        "Authorization": `Bearer ${ token }`,
        "accept": "*/*",
        "Content-Type": "application/json",
    };
};

export const fetch = async(route, method, data) => {
    try {
        const token = getToken()
        const res = await axios({
            method: method,
            url: `${BASE_URL}/${route}`,
            data: data,
            headers: headers(token),
        });

        if (res) {

            return res;
        };

        return "error";
    } catch (error) {

        return "error";
    };
};