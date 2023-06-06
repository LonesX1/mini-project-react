import { getToken } from "./getToken";
const checkAuthentication = () => {
    const token = getToken();
    
    return !!token;
};

export default checkAuthentication;