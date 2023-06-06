import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const registerUser = (data) => {

    return fetch("register", Methods.POST, data);
};