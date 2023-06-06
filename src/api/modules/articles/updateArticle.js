import { Methods } from "../../../static/constants";
import { fetch } from "../../api";

export const updateArticle = (data, slug) => {

    return fetch(`articles/${slug}`, Methods.PUT, data);
};