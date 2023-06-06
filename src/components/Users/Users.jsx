import React, { useEffect, useMemo, useState } from 'react';
import DataTape from '../DataTape/DataTape';
import UsersCard from './users_card/UsersCard';
import './Users.css';
import { getUsers } from '../../api/modules/users/getUsers.js';
import getTotalPage from '../../mixins/getTotalPage';
import Pagination from '@mui/material/Pagination';
import { createPagination } from '../../mixins/createPagination';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 13;
    const [totalPage, setTotalPage] = useState(1);
    const lastIndexUser = page * limit;
    const firstIndexUser = lastIndexUser - limit;

    const handleChange = (event, value) => {
        setPage(value);
    };

    const pageWithUsers = useMemo(() => {
        return createPagination(users, firstIndexUser, lastIndexUser);
    }, [users, firstIndexUser, lastIndexUser]);

    const loadUsers = async() => {
        const res = await getUsers();

        if (res !== "error") {
            setTotalPage(getTotalPage(res.data.length, limit));
            setUsers(res.data);
        };
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return users.length !== 0? 
    ( 
        <DataTape name="Users" type="users">
            <div className='datatape__users_list'>
            {
                users? 
                pageWithUsers.map((item, index) => 
                    <UsersCard getUsers={loadUsers} key={index} data={item} />
                    ):
                "loading..."
            }
            </div>
            <div className='datatape__users_footer'>
                <Pagination page={page} count={totalPage} onChange={handleChange} color="primary" />
            </div>
        </DataTape>
     ) :
        <DataTape name="Users">
            Loading...
        </DataTape>
    ;
};
 
export default Users;