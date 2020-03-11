import React, {Component, Fragment} from 'react';
import './componentItem.css';
class UserItem extends Component{
    state = {
        name: "Oleg Vunnuk",
        address: "Logovo Vovchutsi",
        phone: "(097)-714-8701",
        email: "truevunnuk@ukr.net",
        avatar: 88,
        gender: 'men',
        favorite: 'far fa-star'
    };
    onRandomAvatar = () => {
        const avatar = Math.floor(Math.random() * Math.floor(99));
        this.setState ({
            avatar:avatar
        })
    }
    setFavorite = () => {
        if(this.state.favorite == 'far fa-star'){
            const favorite = 'fas fa-star';
            this.setState ({
                favorite:favorite
            })
        }
        else{
            const favorite = 'far fa-star';
            this.setState ({
                favorite:favorite
            })
        }
    }
    render(){
        const {name, address, phone, email, avatar, gender, favorite} = this.state;
        const URL = `https://api.randomuser.me/portraits/${ gender }/${ avatar }.jpg`;
        return (
            <Fragment>
            <div className="container d-flex">
                
                <div className = "col-12 col-sm-6 col-md-3 px-0">
                    <img src = { URL } className = "rounded-circle mx-auto d-block img-fluid" alt = { name }/>
                </div>

                <div className = "col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <span className = "fa fa-mobile fa-2x text-success float-right pulse" title = "online now"></span>
                        <label className="name lead">{ name }</label>
                        <br/>
                        <span className = "fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title = "" data-original-title = "5842 Hillcrest Rd"></span>
                        <span className = "text-muted">{ address }</span>
                        <br/>
                        <span className = "fa fa-phone fa-fw text-muted" data-toggle="tooltip" title = "" data-original-title = "(870) 288-4149"></span>
                        <span className = "text-muted small">{ phone }</span>
                        <br/>
                        <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title = "" title = ""></span>
                        <span className="text-muted small text-truncate">{ email }</span>
                </div>
                
            </div>
            <i className = { favorite } onClick = { this.setFavorite }></i>
            
            <button className = "btn btn-success" onClick  = { this.onRandomAvatar }> Random avatar </button>
            </Fragment>
        );
    };
};
export default UserItem;