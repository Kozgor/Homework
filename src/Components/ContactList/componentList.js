import React from 'react';
import './componentList.css';
import  UserItem from './ContactItems/componentItem.js';

const UserList = () => {
    return (
        <div className="container d-block">
            <ul>
                <li className="list-group-item"><UserItem /></li>
            </ul>
        </div>
    );
};
export default UserList;