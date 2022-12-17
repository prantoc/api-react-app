import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
const UserTable = () => {
    const { data: users, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`).then(res => res.json()).catch(error => console.log(error))
    })
    console.log(users);

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>

        </>
    );
};

export default UserTable;