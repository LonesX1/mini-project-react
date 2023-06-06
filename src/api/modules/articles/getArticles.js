import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const getArticles = () => {
    
    return fetch("articles", Methods.GET);
};