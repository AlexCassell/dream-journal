import React, { Component } from 'react';
import { auth, provider } from '../firebase.js';
import '../css/Login.css';

let email = null;
class Login extends Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            username: '',
            user: null
        };
}

componentDidMount() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            this.setState({ user });
        } 
    });
}
    
    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
            email = null;
        }
    
        login() {
            auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
        }

        setUser(){
            email = this.state.user.email
        }

    render() {
        return (
            <div className='app'>
                <header>
                    <div className="login-logout">
                        {this.state.user ?
                            <button className="login-logout__button" onClick={this.logout}>Logout?</button>                
                            :
                            <button className="login-logout__button" onClick={this.login}>Google Login</button>              
                        }
                    </div>
                </header>
                {this.state.user ?
                    <div>
                        <div className='user-profile'>
                            {/* <img className="profile-image"  alt={this.state.user.displayName || this.state.user.email} src={this.state.user.photoURL} /> */}
                            Welcome {this.state.user.displayName || this.state.user.email}!
                            {this.setUser()}
                        </div>
                    </div>
                    :
                        <div className='wrapper'>

                        </div>
                }
            </div>
        );
    }
}
export default Login;
export {email};