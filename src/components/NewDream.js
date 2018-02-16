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
                <div className="Subtitle">Actual Location</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" title="Home">Home</button><button className="Tags" title="Partner's">Partner's</button>
                    <button className="Tags" title="Friends's">Friends's</button><button className="Tags" title="Parents's">Parents's</button>
                    <button className="Tags" title="Hotel">Hotel</button><button className="Tags" title="Hospital">Hospital</button>
                    <button className="Tags" title="School">School</button><button className="Tags" title="Other">Other</button>
                </div>
                <div className="Subtitle">Dream Location</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" title="Home">Home</button><button className="Tags" title="Partner's">Partner's</button>
                    <button className="Tags" title="Friends's">Friends's</button><button className="Tags" title="Parents's">Parents's</button>
                    <button className="Tags" title="Hotel">Hotel</button><button className="Tags" title="Hospital">Hospital</button>
                    <button className="Tags" title="School">School</button><button className="Tags" title="Work">Work</button>
                    <button className="Tags" title="Recurring">Recurring</button><button className="Tags" title="Garage">Garage</button>
                    <button className="Tags" title="Street">Street</button><button className="Tags" title="Bridge">Bridge</button>
                    <button className="Tags" title="Car">Car</button><button className="Tags" title="Bus">Bus</button>
                    <button className="Tags" title="Plane">Plane</button><button className="Tags" title="Forest">Forest</button>
                    <button className="Tags" title="Planet">Planet</button><button className="Tags" title="Moon">Moon</button>
                    <button className="Tags" title="Space">Space</button><button className="Tags" title="Other">Other</button>
                </div>
            </div>
            <input type="submit" value="Submit" />
        </div>
        );
    }
}

export default NewDream;
