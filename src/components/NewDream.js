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
                    <input className="Forms" type="text" name="name" />
                    <div className="Subtitle">My Dream</div>
                    <textarea className="Forms" type="text" name="dream" />
                </label>
            </form>
            <div className="TagsWrapper">
            <div className="Subtitle">Type</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" name="Dream">Dream</button><button className="Tags" name="Nightmare">Nightmare</button>
                    <button className="Tags" name="Both">Both</button><button className="Tags" name="Neither">Neither</button>
                </div>
                <div className="Subtitle">Actual Location</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" name="Home">Home</button><button className="Tags" name="Partner's">Partner's</button>
                    <button className="Tags" name="Friends's">Friends's</button><button className="Tags" name="Parents's">Parents's</button>
                    <button className="Tags" name="Hotel">Hotel</button><button className="Tags" name="Hospital">Hospital</button>
                    <button className="Tags" name="School">School</button><button className="Tags" name="Other">Other</button>
                </div>
                <div className="Subtitle">Dream Location</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" name="Home">Home</button><button className="Tags" name="Partner's">Partner's</button>
                    <button className="Tags" name="Friends's">Friends's</button><button className="Tags" name="Parents's">Parents's</button>
                    <button className="Tags" name="Hotel">Hotel</button><button className="Tags" name="Hospital">Hospital</button>
                    <button className="Tags" name="School">School</button><button className="Tags" name="Work">Work</button>
                    <button className="Tags" name="Recurring">Recurring</button><button className="Tags" name="Garage">Garage</button>
                    <button className="Tags" name="Street">Street</button><button className="Tags" name="Bridge">Bridge</button>
                    <button className="Tags" name="Car">Car</button><button className="Tags" name="Bus">Bus</button>
                    <button className="Tags" name="Plane">Plane</button><button className="Tags" name="Forest">Forest</button>
                    <button className="Tags" name="Planet">Planet</button><button className="Tags" name="Moon">Moon</button>
                    <button className="Tags" name="Space">Space</button><button className="Tags" name="Other">Other</button>
                </div>
                <div className="Subtitle">Prominent Colors</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" name="None">None</button><button className="Tags" name="Blue">Blue</button>
                    <button className="Tags" name="Red">Red</button><button className="Tags" name="Orange">Orange</button>
                    <button className="Tags" name="Yellow">Yellow</button><button className="Tags" name="Purple">Purple</button>
                    <button className="Tags" name="Pink">Pink</button><button className="Tags" name="Green">Green</button>
                    <button className="Tags" name="White">White</button><button className="Tags" name="Black">Black</button>
                    <button className="Tags" name="Brown">Brown</button><button className="Tags" name="Other">Other</button>
                </div>
                <div className="Subtitle">Actions</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" name="Walking">Walking</button><button className="Tags" name="Running">Running</button>
                    <button className="Tags" name="Chased">Chased</button><button className="Tags" name="Chasing">Chasing</button>
                    <button className="Tags" name="Playing">Playing</button><button className="Tags" name="Hiding">Hiding</button>
                    <button className="Tags" name="Teaching">Teaching</button><button className="Tags" name="Flirting">Flirting</button>
                    <button className="Tags" name="Driving">Driving</button><button className="Tags" name="Other">Other</button>
                </div>
            </div>
            <input className="PostSubmit"type="submit" value="Submit" />
        </div>
        );
    }
}

export default NewDream;
