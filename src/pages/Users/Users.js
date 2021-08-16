import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import { setUsers } from '../../redux/actions/usersAction';
import { dispatch } from '../../redux/store';
import UsersWrapper from './UsersWrapper';


const Users = () => {
    useEffect(() => {
        setUsers(dispatch);
    }, [])

    const data = useSelector(state => state.users.data);
    const error = useSelector(state => state.global.error);
    const loading = useSelector(state => state.global.loading);

    return (
        <UsersWrapper>

            <h1>Users</h1>

            {loading && <LinearProgress /> ||
                error && <Error /> ||
                data.length > 0 && <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell>name</TableCell>
                                <TableCell>username</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((v, i) => {
                                return (
                                    <TableRow>
                                        <TableCell>{v.id}</TableCell>
                                        <TableCell>{v.name}</TableCell>
                                        <TableCell>{v.username}</TableCell>
                                        <TableCell>{v.email}</TableCell>
                                        <TableCell>{v.address.street}</TableCell>
                                    </TableRow>

                                )
                            })}
                            {/* {data.map(v =>

                        )} */}
                        </TableBody>
                    </Table>
                </TableContainer> || "No data"}

        </UsersWrapper>
    )
}

export default Users
