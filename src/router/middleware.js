import checkAuthentication from '../mixins/checkAuthentication';

const requireAuth = (register, pathname, navigate) => {
    const isAuthenticated  = checkAuthentication();

    if (!isAuthenticated ) {
        if (register) {
            navigate('/register');
        } else {
            navigate('/login');
        };
    };
		
    if (pathname === '/') {
        throw new Error('Wrong pathname!');
    };
};

export default requireAuth;