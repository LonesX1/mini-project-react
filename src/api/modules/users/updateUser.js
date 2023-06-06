import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const updateUser = (data, username) => {

    return fetch(`users/${username}`, Methods.PATCH, data);
};