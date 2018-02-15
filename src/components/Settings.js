import React, { Component } from 'react';
import Login from './Login';
import '../css/Settings.css';

class Settings extends Component {

    render() {
        return (
            <div className="Settings">
                <Login />
            </div>
        );
    }
}
    
export default Settings;