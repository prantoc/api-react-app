import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
    // GET request for remote image in node.js
    const [users, setUsers] = useState([])
    const [loding, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        })
            .then(function (response) {
                setUsers(response.data)
                setLoading(false)
            });

    }, [])
    return (
        <div>
            {
                loding && <p>Loding....</p>
            }
            {
                users?.map(user => <div key={user.id}>

                    <p>{user.name}</p>


                </div>)
            }
        </div>
    );
};

export default User;