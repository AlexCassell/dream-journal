import React, { Component } from 'react';
import '../css/NewDream.css';





class NewDream extends Component {
    constructor(props) {
    super(props);
    this.state = {
        'loggedIn': ''
    };
}

    render() {
        return (
        <div className="NewDream">
            <div className="Title">
                Add Your New Dream!
            </div>
            <form>
                <label className="FormsWrapper">
                    <div className="Subtitle">Title</div>
                    <input className="Forms" type="text" name="title" />
                    <div className="Subtitle">My Dream</div>
                    <textarea className="Forms" type="text" name="dream" />
                </label>
            </form>
            <div className="TagsWrapper">
                <button className="Tags" title="Word">Home</button>
            </div>
            <input type="submit" value="Submit" />
        </div>
        );
    }
}

export default NewDream;
