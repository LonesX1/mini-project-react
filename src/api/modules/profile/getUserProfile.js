import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const getUserProfile = () => {

    return fetch(`users/me`, Methods.GET);
};