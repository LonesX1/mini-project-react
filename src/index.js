import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import Register from './components/Register/Register';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import Articles from './components/Articles/Articles';
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';
import Error from "./components/error/Error";
import CreateUser from './components/Users/users_card/create_user/CreateUser';
import EditUser from './components/Users/users_card/edit_user/EditUser';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      errorElement: <Error/>,
      children: [
        {
            path: '/login',
            element: <Auth/>,
        },
        {
            path: '/register',
            element: <Register/>,
        },
        {
            path: '/articles',
            element: <Articles/>,
        },
        {
            path: '/users',
            element: <Users/>,
        },
        {
            path: '/users/:userName',
            element: <EditUser/>,
        },
        {   
            path: '/users/create',
            element: <CreateUser/>,
        },
        {
            path: '/myProfile',
            element: <Profile/>,
        },
      ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
