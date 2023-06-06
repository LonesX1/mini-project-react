import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const postUser = (data) => {

    return fetch("users", Methods.POST, data);
};