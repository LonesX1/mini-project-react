import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const deleteUser = async(username) => {
    const res = await fetch(`users/${username}`, Methods.DELETE);
    
    return res;
};