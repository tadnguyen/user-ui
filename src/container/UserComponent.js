import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUserReq, sortByUserFullName, sortByUserName } from '../redux/actions/usersAction';
import { setUsersPage, setUsersPerPage } from '../redux/actions/pageAction';
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
    const usersPage = useSelector((state) => state.pageReducer.usersPage);
    const usersPerPage = useSelector(
        (state) => state.pageReducer.usersPerPage
    );
    const history = useHistory();

    useEffect(() => {
        dispatch(getAllUserReq({ page: usersPage + 1, results: usersPerPage }));
    }, [usersPage, usersPerPage]);

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
        dispatch(setUsersPage(newPage, 'SET_USERS_PAGE'));
        history.push({
            pathname: '/',
            hash: '',
            state: { fromPopup: true }
        });
    };
    const handleChangePerPage = (e) => {
        dispatch(setUsersPerPage(e.target.value, 'SET_USERS_PER_PAGE'));
        dispatch(setUsersPage(0, 'SET_USERS_PAGE'));
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
                    {users?.map(user => {
                        return (
                            <tr key={user.id.value}>
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