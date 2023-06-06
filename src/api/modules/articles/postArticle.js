import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const postArticle = (data) => {

    return fetch("articles", Methods.POST, data);
};