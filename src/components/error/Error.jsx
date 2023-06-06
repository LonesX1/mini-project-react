import { Container } from '@mui/material';
import React from 'react';
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return ( 
        <Container sx={{textAlign: "center"}}>  
            <h1>
                Oops!
            </h1>
            <p>
                Sorry, an unexpected error has occurred.
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>          
        </Container>
     );
}
 
export default Error;