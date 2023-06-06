import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const getUsers = () => {

    return fetch("users", Methods.GET);
};