import React  from 'react';
import './componentList.css';
import  UserItem from './ContactItems/componentItem.js';

const UserList = ({List, setFavorite}) => {
    const item = List.map(item => {
        return (<UserItem
        key = {item.id} 
        name = {item.name}
        address = {item.address}
        email = {item.email}
        phone = {item.phone}
        avatar = {item.avatar}
        gender = {item.gender}
        favorite = {item.favorite}
        setFavorite = {() => setFavorite(item.id)}
        />
        );
    });
    return (
        <div className="container d-block">
            <ul>
                <li className="list-group-item">{ item }</li>
            </ul>
        </div>
    );
};
export default UserList;