import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUserReq, sortByUserFullName, sortByUserName } from '../redux/actions/usersAction';
import sortUsers from './sortUsers';
import {
    Button,
    TablePagination
} from '@material-ui/core';
import {
    ArrowUpward,
    ArrowDownward
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const UserComponent = () => {
    const [sort, setSort] = useState(true);
    const users = useSelector((state) => state.usersReducer.users);
    const dispatch = useDispatch();
    const history = useHistory();
    const [usersPage, setUsersPage] = useState(0);

    const [usersPerPage, setUsersPerPage] = useState(10);

    useEffect(() => {
        dispatch(getAllUserReq({ page: usersPage + 1, results: usersPerPage }));
    }, []);

    //Sort user
    const handleSortByUserFullName = () => {
        const usersSort = [...users];
        sortUsers(usersSort, sort, 'fullname');
        dispatch(sortByUserFullName({ usersSort }, 'SORT_BY_USER_FULLNAME'));
        setSort(!sort);
    };
    const handleSortByUsername = () => {
        const usersSort = [...users];
        sortUsers(usersSort, sort, 'username');
        dispatch(sortByUserName({ usersSort }, 'SORT_BY_USERNAME'));
        setSort(!sort);
    };

    //Xu ly phan trang
    const handleChangePage = (e, newPage) => {
        setUsersPage(newPage);
        dispatch(getAllUserReq({ page: newPage, results: usersPerPage}));
        history.push({
            pathname: '/',
            hash: '',
            state: { fromPopup: true }
        });
    };
    const handleChangePerPage = (e) => {
        setUsersPerPage(e.target.value);
        setUsersPage(0);
        dispatch(getAllUserReq({ page: 1, results: e.target.value }));
        history.push({
            pathname: '/',
            hash: '',
            state: { fromPopup: true }
        });
    };
    return (
        <div className="ui container segment" style={{ paddingTop: '35px' }}>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>
                            <Button onClick={handleSortByUserFullName}>
                                FullName
                                {sort ? (
                                    <ArrowUpward
                                        sx={{ fontSize: '14px', marginLeft: '2px' }}
                                    ></ArrowUpward>
                                ) : (
                                    <ArrowDownward
                                        sx={{ fontSize: '14px', marginLeft: '2px' }}
                                    ></ArrowDownward>
                                )}
                            </Button>
                        </th>
                        <th>
                            <Button onClick={handleSortByUsername}>
                                UserName
                                {sort ? (
                                    <ArrowUpward
                                        sx={{ fontSize: '14px', marginLeft: '2px' }}
                                    ></ArrowUpward>
                                ) : (
                                    <ArrowDownward
                                        sx={{ fontSize: '14px', marginLeft: '2px' }}
                                    ></ArrowDownward>
                                )}
                            </Button>
                        </th>
                        <th>Thumbnail Icon</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td data-label="STT">{(usersPage * usersPerPage) + index + 1}</td>
                                <td data-label="FullName">{`${user.name.title}` + ` ${user.name.first}` + ` ${user.name.last}`}</td>
                                <td data-label="UserName">{user.login.username}</td>
                                <td data-label="Thumbnail Icon">{user.picture.thumbnail}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    {
                        <TablePagination
                            rowsPerPageOptions={[10, 20, 100]}
                            count={2000}
                            rowsPerPage={usersPerPage}
                            page={usersPage}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangePerPage}
                        />
                    }
                </tfoot>
            </table>
        </div>
    )
}

export default UserComponent;