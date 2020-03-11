import React from 'react';
import { Fragment } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './Components/ContactList/componentList';

const App = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="container d-flex justify-content-center">
                    <h1>♥ Contact list IT-Step ♥</h1>
                </div>
                <div>
                    <UserList />
                </div>
            </div>
        </Fragment>
    );
};
// state
// function, class based component
ReactDOM.render(<App />, document.getElementById('root'));