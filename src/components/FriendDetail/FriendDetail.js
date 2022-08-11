import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>This is detail of a friend:{friendId} </h2>
            <h3>Name:{friend.name} </h3>
            <h3>Email:{friend.email} </h3>
            <h3>Website :{friend.website} </h3>
            <p><small>City: {friend.address?.city}</small> </p>
        </div>
    );
};

export default FriendDetail;