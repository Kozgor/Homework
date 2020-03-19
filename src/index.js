import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './Components/ContactList/componentList';
class App extends React.Component {
    state = {
        List: [
            {
                id: 1,
                name: "Oleg Vunnuk",
                address: "Logovo Vovchutsi",
                phone: "(097)-714-8701",
                email: "truevunnuk@ukr.net",
                avatar: 88,
                gender: 'men',
                favorite: false
            },
            {
                id:2,
                name: "John Snow",
                address: "Castle Black",
                phone: "(096)-711-5602",
                email: "truetargarien@ukr.net",
                avatar: 70,
                gender: 'men',
                favorite: false
            },
            {
                id:3,
                name: "John Wick",
                address: "1st WallStreet Court, Continental, room number 44",
                phone: "(099)-000-0099",
                email: "ilovemydog@ukr.net",
                avatar: 55,
                gender: 'men',
                favorite: false
            },
            {
                id:4,
                name: "Cleopatra",
                address: "Cairo",
                phone: "none",
                email: "none",
                avatar: 1,
                gender: 'women',
                favorite: false
            },
            {
                id: 5,
                name: "Spider Man",
                address: "Forest Hills 20, NY",
                phone: "(093)-123-4567",
                email: "bigpowerisbigresponsibility@ukr.net",
                avatar: 65,
                gender: 'men',
                favorite: false
            }
        ]
    }
    setFavorite = id  => {
        this.setState (state => {
            const index = this.state.List.findIndex(elem=> elem.id === id);
            const tmpList = this.state.List.slice();
            tmpList[index].favorite = !tmpList[index].favorite;
            return {
            favorite: !this.tmpList
            };
        });    
    };
    render(){
    return (
        <div className="container">
            <div className="container d-flex justify-content-center">
                <h1>♥ Contact list IT-Step ♥</h1>
            </div>
            <div>
            <UserList
                List={this.state.List}
                setFavorite = {this.setFavorite}>  
            </UserList>
            </div>
        </div>
    );
    };
};
ReactDOM.render(<App />, document.getElementById('root'));