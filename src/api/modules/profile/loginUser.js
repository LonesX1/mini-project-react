import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const loginUser = (data) => {

    return fetch("login", Methods.POST, data);
};