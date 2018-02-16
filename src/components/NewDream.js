import React, { Component } from 'react';
import '../css/NewDream.css';


let dreamType = [0,0,0,0];
let actualLocation = [0,0,0,0,0,0,0,0];
let dreamLocation = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

class NewDream extends Component {
    constructor(props) {
    super(props);
    this.state = {
        'loggedIn': '',
        'dreamType1': '',
        'dreamType2': '',
        'dreamType3': '',
        'dreamType4': '',
        'actualLocation1': '',
        'actualLocation2': '',
        'actualLocation3': '',
        'actualLocation4': '',
        'actualLocation5': '',
        'actualLocation6': '',
        'actualLocation7': '',
        'actualLocation8': '',
        'dreamLocation1': '',
        'dreamLocation2': '',
        'dreamLocation3': '',
        'dreamLocation4': '',
        'dreamLocation5': '',
        'dreamLocation6': '',
        'dreamLocation7': '',
        'dreamLocation8': '',
        'dreamLocation9': '',
        'dreamLocation10': '',
        'dreamLocation11': '',
        'dreamLocation12': '',
        'dreamLocation13': '',
        'dreamLocation14': '',
        'dreamLocation15': '',
        'dreamLocation16': '',
        'dreamLocation17': '',
        'dreamLocation18': '',
        'dreamLocation19': '',
        'dreamLocation20': '',
    };
}


    componentWillMount(){
        this.setState({dreamType1: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Dream">Dream</button></div>});
        this.setState({dreamType2: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Nightmare">Nightmare</button></div>});
        this.setState({dreamType3: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Both">Both</button></div>});
        this.setState({dreamType4: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Neither">Neither</button></div>});

        this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
        this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
        this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
        this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
        this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
        this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
        this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
        this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});

        this.setState({dreamLocation1: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Home">Home</button></div>});
        this.setState({dreamLocation2: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Partner's">Partner's</button></div>});
        this.setState({dreamLocation3: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Friend's">Friend's</button></div>});
        this.setState({dreamLocation4: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Parent's">Parent's</button></div>});
        this.setState({dreamLocation5: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Hotel">Hotel</button></div>});
        this.setState({dreamLocation6: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Hospital">Hospital</button></div>});
        this.setState({dreamLocation7: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="School">School</button></div>});
    }

    handleDreamType(e){
        if(e.target.name === "Dream" && dreamType[0] === 0){
            dreamType[0] = 1;
            this.setState({dreamType1: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamType(e)} name="Dream">Dream</button></div>});
            dreamType[1] = 0;
            this.setState({dreamType2: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Nightmare">Nightmare</button></div>});
            dreamType[2] = 0;
            this.setState({dreamType3: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Both">Both</button></div>});
            dreamType[3] = 0;
            this.setState({dreamType4: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Neither">Neither</button></div>});
        }
        else if (e.target.name === "Dream" && dreamType[0] === 1){
            dreamType[0] = 0;
            this.setState({dreamType1: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Dream">Dream</button></div>});
        }

        if(e.target.name === "Nightmare" && dreamType[1] === 0){
            dreamType[1] = 1;
            this.setState({dreamType2: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamType(e)} name="Nightmare">Nightmare</button></div>});
            dreamType[0] = 0;
            this.setState({dreamType1: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Dream">Dream</button></div>});
            dreamType[2] = 0;
            this.setState({dreamType3: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Both">Both</button></div>});
            dreamType[3] = 0;
            this.setState({dreamType4: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Neither">Neither</button></div>});
        }
        else if (e.target.name === "Nightmare" && dreamType[1] === 1){
            dreamType[1] = 0;
            this.setState({dreamType2: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Nightmare">Nightmare</button></div>});
        }

        if(e.target.name === "Both" && dreamType[2] === 0){
            dreamType[2] = 1;
            this.setState({dreamType3: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamType(e)} name="Both">Both</button></div>});
            dreamType[0] = 0;
            this.setState({dreamType1: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Dream">Dream</button></div>});
            dreamType[1] = 0;
            this.setState({dreamType2: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Nightmare">Nightmare</button></div>});
            dreamType[3] = 0;
            this.setState({dreamType4: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Neither">Neither</button></div>});
        }
        else if (e.target.name === "Both" && dreamType[2] === 1){
            dreamType[2] = 0;
            this.setState({dreamType3: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Both">Both</button></div>});
        }

        if(e.target.name === "Neither" && dreamType[3] === 0){
            dreamType[3] = 1;
            this.setState({dreamType4: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamType(e)} name="Neither">Neither</button></div>});
            dreamType[0] = 0;
            this.setState({dreamType1: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Dream">Dream</button></div>});
            dreamType[1] = 0;
            this.setState({dreamType2: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Nightmare">Nightmare</button></div>});
            dreamType[2] = 0;
            this.setState({dreamType3: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Both">Both</button></div>});
        }
        else if (e.target.name === "Neither" && dreamType[3] === 1){
            dreamType[3] = 0;
            this.setState({dreamType4: <div><button className="Tags" onClick={(e) => this.handleDreamType(e)} name="Neither">Neither</button></div>});
        }
    }

    handleActualLocation(e){
        if(e.target.name === "Home" && actualLocation[0] === 0){
            actualLocation[0] = 1;
            this.setState({actualLocation1: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
            actualLocation[1] = 0;
            this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            actualLocation[2] = 0;
            this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
            actualLocation[3] = 0;
            this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
            actualLocation[4] = 0;
            this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
            actualLocation[5] = 0;
            this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
            actualLocation[6] = 0;
            this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
            actualLocation[7] = 0;
            this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "Home" && actualLocation[0] === 1){
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
        }

        if(e.target.name === "Partner's" && actualLocation[1] === 0){
            actualLocation[1] = 1;
            this.setState({actualLocation2: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
            actualLocation[2] = 0;
            this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
            actualLocation[3] = 0;
            this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
            actualLocation[4] = 0;
            this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
            actualLocation[5] = 0;
            this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
            actualLocation[6] = 0;
            this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
            actualLocation[7] = 0;
            this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "Partner's" && actualLocation[1] === 1){
            actualLocation[1] = 0;
            this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            
        }

        if(e.target.name === "Friend's" && actualLocation[2] === 0){
            actualLocation[2] = 1;
            this.setState({actualLocation3: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
            actualLocation[1] = 0;
            this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            actualLocation[3] = 0;
            this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
            actualLocation[4] = 0;
            this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
            actualLocation[5] = 0;
            this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
            actualLocation[6] = 0;
            this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
            actualLocation[7] = 0;
            this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "Friend's" && actualLocation[2] === 1){
            actualLocation[2] = 0;
            this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
        }

        if(e.target.name === "Parent's" && actualLocation[3] === 0){
            actualLocation[3] = 1;
            this.setState({actualLocation4: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
            actualLocation[1] = 0;
            this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            actualLocation[2] = 0;
            this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
            actualLocation[4] = 0;
            this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
            actualLocation[5] = 0;
            this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
            actualLocation[6] = 0;
            this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
            actualLocation[7] = 0;
            this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "Parent's" && actualLocation[3] === 1){
            actualLocation[3] = 0;
            this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
        }

        if(e.target.name === "Hotel" && actualLocation[4] === 0){
            actualLocation[4] = 1;
            this.setState({actualLocation5: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
            actualLocation[1] = 0;
            this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            actualLocation[2] = 0;
            this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
            actualLocation[3] = 0;
            this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
            actualLocation[5] = 0;
            this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
            actualLocation[6] = 0;
            this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
            actualLocation[7] = 0;
            this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "Hotel" && actualLocation[4] === 1){
            actualLocation[4] = 0;
            this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
        }

        if(e.target.name === "Hospital" && actualLocation[5] === 0){
            actualLocation[5] = 1;
            this.setState({actualLocation6: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
            actualLocation[1] = 0;
            this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            actualLocation[2] = 0;
            this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
            actualLocation[3] = 0;
            this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
            actualLocation[4] = 0;
            this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
            actualLocation[6] = 0;
            this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
            actualLocation[7] = 0;
            this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "Hospital" && actualLocation[5] === 1){
            actualLocation[5] = 0;
            this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
        }

        if(e.target.name === "School" && actualLocation[6] === 0){
            actualLocation[6] = 1;
            this.setState({actualLocation7: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
            actualLocation[1] = 0;
            this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            actualLocation[2] = 0;
            this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
            actualLocation[3] = 0;
            this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
            actualLocation[4] = 0;
            this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
            actualLocation[5] = 0;
            this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
            actualLocation[7] = 0;
            this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "School" && actualLocation[6] === 1){
            actualLocation[6] = 0;
            this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
        }

        if(e.target.name === "Other" && actualLocation[7] === 0){
            actualLocation[7] = 1;
            this.setState({actualLocation8: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
            actualLocation[1] = 0;
            this.setState({actualLocation2: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Partner's">Partner's</button></div>});
            actualLocation[2] = 0;
            this.setState({actualLocation3: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Friend's">Friend's</button></div>});
            actualLocation[3] = 0;
            this.setState({actualLocation4: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Parent's">Parent's</button></div>});
            actualLocation[4] = 0;
            this.setState({actualLocation5: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hotel">Hotel</button></div>});
            actualLocation[5] = 0;
            this.setState({actualLocation6: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Hospital">Hospital</button></div>});
            actualLocation[6] = 0;
            this.setState({actualLocation7: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="School">School</button></div>});
        }
        else if (e.target.name === "Other" && actualLocation[7] === 1){
            actualLocation[7] = 0;
            this.setState({actualLocation8: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Other">Other</button></div>});
        }
    }

    handleDreamLocation(e){
        if(e.target.name === "Home" && actualLocation[0] === 0){
            actualLocation[0] = 1;
            this.setState({actualLocation1: <div><button className="Tags TagsClicked" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
        }
        else if (e.target.name === "Home" && actualLocation[0] === 1){
            actualLocation[0] = 0;
            this.setState({actualLocation1: <div><button className="Tags" onClick={(e) => this.handleActualLocation(e)} name="Home">Home</button></div>});
        }
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
                    {this.state.dreamType1}
                    {this.state.dreamType2}
                    {this.state.dreamType3}
                    {this.state.dreamType4}
                </div>
                <div className="Subtitle">Actual Location</div>
                <div className="TagsWrappers__Inner">
                    {this.state.actualLocation1}
                    {this.state.actualLocation2}
                    {this.state.actualLocation3}
                    {this.state.actualLocation4}
                    {this.state.actualLocation5}
                    {this.state.actualLocation6}
                    {this.state.actualLocation7}
                    {this.state.actualLocation8}
                </div>
                <div className="Subtitle">Dream Location(s)</div>
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
                <div className="Subtitle">Prominent Color(s)</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" name="None">None</button><button className="Tags" name="Blue">Blue</button>
                    <button className="Tags" name="Red">Red</button><button className="Tags" name="Orange">Orange</button>
                    <button className="Tags" name="Yellow">Yellow</button><button className="Tags" name="Purple">Purple</button>
                    <button className="Tags" name="Pink">Pink</button><button className="Tags" name="Green">Green</button>
                    <button className="Tags" name="White">White</button><button className="Tags" name="Black">Black</button>
                    <button className="Tags" name="Brown">Brown</button><button className="Tags" name="Other">Other</button>
                </div>
                <div className="Subtitle">Action(s)</div>
                <div className="TagsWrappers__Inner">
                    <button className="Tags" name="Walking">Walking</button><button className="Tags" name="Running">Running</button>
                    <button className="Tags" name="Chased">Chased</button><button className="Tags" name="Chasing">Chasing</button>
                    <button className="Tags" name="Playing">Playing</button><button className="Tags" name="Hiding">Hiding</button>
                    <button className="Tags" name="Teaching">Teaching</button><button className="Tags" name="Flirting">Flirting</button>
                    <button className="Tags" name="Driving">Driving</button><button className="Tags" name="Other">Other</button>
                </div>
            </div>
            <input className="PostSubmit" type="post" defaultValue="Post Dream" />
        </div>
        );
    }
}

export default NewDream;
