import React, { useState } from 'react';
import DataTape from '../../../DataTape/DataTape';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { updateUser } from '../../../../api/modules/users/updateUser';

const EditUser = () => {
    const { state } = useLocation();
    const [name, setName] = useState(state.username);
    const [email, setEmail] = useState(state.email);
    const [bio, setBio] = useState(state.bio);
    const [image, setImage] = useState(state.image);
    const navigate = useNavigate();

    const patchUser = async() => {
        const editedUser = {
            "username": name,
            "email": email,
            "bio": bio,
            "image": image,
        };
        
        const res = await updateUser(editedUser, state.username);

        if (res !== "error") {
            navigate('/users');
        };
    };


    return ( 
        <DataTape name={`Edit user '${state.username}'`}>
            <div className='datatape__edit_user-line'>
                <span>Name:</span>
                <br />
                <TextField onChange={(e) => setName(e.target.value)} sx={{width: 400, mt: 2}} id="outlined-basic" label='Username' defaultValue={state.username} variant="outlined" />
            </div>
            <div className='datatape__edit_user-line'>
                <span>E-mail:</span>
                <br />
                <TextField onChange={(e) => setEmail(e.target.value)} sx={{width: 400, mt: 2}} id="outlined-basic" label='E-mail' defaultValue={state.email} variant="outlined" />
            </div>
            <div className='datatape__edit_user-line'>
                <span>Avatar:</span>
                <br />
                <TextField onChange={(e) => setImage(e.target.value)} sx={{width: 400, mt: 2}} id="outlined-basic" label='Avatar' placeholder='https://example.com/avatar.jpg' defaultValue={state.image} variant="outlined" />
            </div>
            <div className='datatape__edit_user-line'>
                <span>Bio:</span>
                <br />
                <TextField onChange={(e) => setBio(e.target.value)} sx={{width: 1150, mt: 2}} rows={5} id="outlined-multiline-static" label='Bio' defaultValue={state.bio} variant="outlined" multiline/>
            </div>
            <div className='datatape__edit_user-line'>
                <Button onClick={patchUser} variant='contained'>Try edit</Button>
            </div>
        </DataTape>
     );
}
 
export default EditUser;