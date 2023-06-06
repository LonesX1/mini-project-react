import React, { useState } from 'react';
import './Auth.css'
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginUser } from '../../api/modules/profile/loginUser';

const Auth = () => {
    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorLogin, setErrorLogin] = useState(false);
    const { setLogged, setRegister } = useOutletContext();
    const navigate = useNavigate();

    const handleClickLogin = async() => {
        const user = {
            "email": mail,
            "password": password,
        };

        const res = await loginUser(user);

        if (res !== "error") {
            localStorage.setItem('token', res.data.token);
            setLogged(true);
            navigate('/articles');
        } else {
            setErrorLogin(true);
        };   
    };

    return ( 
        <div className='auth'>
            <div className='auth__title'>
                <span>Sign in</span>
            </div>
            <div className='auth__body'>
                <TextField error={errorLogin} id="outlined-basic" onChange={(e) => setMail(e.target.value)} label="E-mail" type='email' variant="outlined" />
                <br />
                <TextField error={errorLogin} id="outlined-basic" label="Password" onChange={(e) => setPassword(e.target.value)} type='password' variant="outlined" />
                <br />
            </div>
            <div className='auth__footer'>
                <Link to={'/register'}>
                    <span onClick={() => setRegister(true)} className='auth_footer-register'>Create account</span>
                </Link>
                <Button variant="contained" onClick={handleClickLogin}>Sign in</Button>
            </div>
        </div>
     );
}
 
export default Auth;