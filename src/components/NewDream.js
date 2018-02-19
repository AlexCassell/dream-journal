import React, { Component } from 'react';
import '../css/NewDream.css';


let dreamType = [0,0,0,0];
let actualLocation = [0,0,0,0,0,0,0,0];
let dreamLocation = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let prominentColor = [0,0,0,0,0,0,0,0,0,0,0,0];
let dreamAction = [0,0,0,0,0,0,0,0,0,0];
let otherTags = [0,0,0,0,0,0,0,0,0,0];
let otherTagsUserInput = ["","","","","","","","","",""];

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
        'prominentColor1': '',
        'prominentColor2': '',
        'prominentColor3': '',
        'prominentColor4': '',
        'prominentColor5': '',
        'prominentColor6': '',
        'prominentColor7': '',
        'prominentColor8': '',
        'prominentColor9': '',
        'prominentColor10': '',
        'prominentColor11': '',
        'prominentColor12': '',
        'dreamAction1': '',
        'dreamAction2': '',
        'dreamAction3': '',
        'dreamAction4': '',
        'dreamAction5': '',
        'dreamAction6': '',
        'dreamAction7': '',
        'dreamAction8': '',
        'dreamAction9': '',
        'dreamAction10': '',
        'otherTags1': '',
        'otherTags2': '',
        'otherTags3': '',
        'otherTags4': '',
        'otherTags5': '',
        'otherTags6': '',
        'otherTags7': '',
        'otherTags8': '',
        'otherTags9': '',
        'otherTags10': '',
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
        this.setState({dreamLocation8: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Work">Work</button></div>});
        this.setState({dreamLocation9: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Recurring">Recurring</button></div>});
        this.setState({dreamLocation10: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Garage">Garage</button></div>});
        this.setState({dreamLocation11: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Street">Street</button></div>});
        this.setState({dreamLocation12: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Bridge">Bridge</button></div>});
        this.setState({dreamLocation13: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Car">Car</button></div>});
        this.setState({dreamLocation14: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Bus">Bus</button></div>});
        this.setState({dreamLocation15: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Plane">Plane</button></div>});
        this.setState({dreamLocation16: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Forest">Forest</button></div>});
        this.setState({dreamLocation17: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Planet">Planet</button></div>});
        this.setState({dreamLocation18: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Moon">Moon</button></div>});
        this.setState({dreamLocation19: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Space">Space</button></div>});
        this.setState({dreamLocation20: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Other">Other</button></div>});

        this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        this.setState({prominentColor2: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Blue">Blue</button></div>});
        this.setState({prominentColor3: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Red">Red</button></div>});
        this.setState({prominentColor4: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Orange">Orange</button></div>});
        this.setState({prominentColor5: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Yellow">Yellow</button></div>});
        this.setState({prominentColor6: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Purple">Purple</button></div>});
        this.setState({prominentColor7: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Pink">Pink</button></div>});
        this.setState({prominentColor8: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Green">Green</button></div>});
        this.setState({prominentColor9: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="White">White</button></div>});
        this.setState({prominentColor10: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Black">Black</button></div>});
        this.setState({prominentColor11: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Brown">Brown</button></div>});
        this.setState({prominentColor12: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Other">Other</button></div>});       

        this.setState({dreamAction1: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Walking">Walking</button></div>});
        this.setState({dreamAction2: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Running">Running</button></div>});
        this.setState({dreamAction3: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Chased">Chased</button></div>});
        this.setState({dreamAction4: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Chasing">Chasing</button></div>});
        this.setState({dreamAction5: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Playing">Playing</button></div>});
        this.setState({dreamAction6: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Hiding">Hiding</button></div>});
        this.setState({dreamAction7: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Teaching">Teaching</button></div>});
        this.setState({dreamAction8: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Flirting">Flirting</button></div>});
        this.setState({dreamAction9: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Driving">Driving</button></div>});
        this.setState({dreamAction10: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Other">Other</button></div>});

        this.setState({otherTags1: <div className="TagsOtherWrapper"><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="Other1" /><button className="TagsOther__Add" name="Other1" defaultValue ="" onClick={(e) => this.handleAddOther(e)}>+</button></div>});
        // this.setState({other2: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other2" /></div>});
        // this.setState({other3: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other3" /></div>});
        // this.setState({other4: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other4" /></div>});
        // this.setState({other5: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other5" /></div>});
        // this.setState({other6: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other6" /></div>});
        // this.setState({other7: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other7" /></div>});
        // this.setState({other8: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other8" /></div>});
        // this.setState({other9: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other9" /></div>});
        // this.setState({other10: <div><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="other10" /></div>});
        
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
        if(e.target.name === "Home" && dreamLocation[0] === 0){
            dreamLocation[0] = 1;
            this.setState({dreamLocation1: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Home">Home</button></div>});
        }
        else if (e.target.name === "Home" && dreamLocation[0] === 1){
            dreamLocation[0] = 0;
            this.setState({dreamLocation1: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Home">Home</button></div>});
        }

        if(e.target.name === "Partner's" && dreamLocation[1] === 0){
            dreamLocation[1] = 1;
            this.setState({dreamLocation2: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Partner's">Partner's</button></div>});
        }
        else if (e.target.name === "Partner's" && dreamLocation[1] === 1){
            dreamLocation[1] = 0;
            this.setState({dreamLocation2: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Partner's">Partner's</button></div>});
        }

        if(e.target.name === "Friend's" && dreamLocation[2] === 0){
            dreamLocation[2] = 1;
            this.setState({dreamLocation3: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Friend's">Friend's</button></div>});
        }
        else if (e.target.name === "Friend's" && dreamLocation[2] === 1){
            dreamLocation[2] = 0;
            this.setState({dreamLocation3: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Friend's">Friend's</button></div>});
        }

        if(e.target.name === "Parent's" && dreamLocation[3] === 0){
            dreamLocation[3] = 1;
            this.setState({dreamLocation4: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Parent's">Parent's</button></div>});
        }
        else if (e.target.name === "Parent's" && dreamLocation[3] === 1){
            dreamLocation[3] = 0;
            this.setState({dreamLocation4: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Parent's">Parent's</button></div>});
        }

        if(e.target.name === "Hotel" && dreamLocation[4] === 0){
            dreamLocation[4] = 1;
            this.setState({dreamLocation5: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Hotel">Hotel</button></div>});
        }
        else if (e.target.name === "Hotel" && dreamLocation[4] === 1){
            dreamLocation[4] = 0;
            this.setState({dreamLocation5: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Hotel">Hotel</button></div>});
        }

        if(e.target.name === "Hospital" && dreamLocation[5] === 0){
            dreamLocation[5] = 1;
            this.setState({dreamLocation6: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Hospital">Hospital</button></div>});
        }
        else if (e.target.name === "Hospital" && dreamLocation[5] === 1){
            dreamLocation[5] = 0;
            this.setState({dreamLocation6: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Hospital">Hospital</button></div>});
        }

        if(e.target.name === "School" && dreamLocation[6] === 0){
            dreamLocation[6] = 1;
            this.setState({dreamLocation7: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="School">School</button></div>});
        }
        else if (e.target.name === "School" && dreamLocation[6] === 1){
            dreamLocation[6] = 0;
            this.setState({dreamLocation7: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="School">School</button></div>});
        }

        if(e.target.name === "Work" && dreamLocation[7] === 0){
            dreamLocation[7] = 1;
            this.setState({dreamLocation8: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Work">Work</button></div>});
        }
        else if (e.target.name === "Work" && dreamLocation[7] === 1){
            dreamLocation[7] = 0;
            this.setState({dreamLocation8: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Work">Work</button></div>});
        }

        if(e.target.name === "Recurring" && dreamLocation[8] === 0){
            dreamLocation[8] = 1;
            this.setState({dreamLocation9: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Recurring">Recurring</button></div>});
        }
        else if (e.target.name === "Recurring" && dreamLocation[8] === 1){
            dreamLocation[8] = 0;
            this.setState({dreamLocation9: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Recurring">Recurring</button></div>});
        }

        if(e.target.name === "Garage" && dreamLocation[9] === 0){
            dreamLocation[9] = 1;
            this.setState({dreamLocation10: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Garage">Garage</button></div>});
        }
        else if (e.target.name === "Garage" && dreamLocation[9] === 1){
            dreamLocation[9] = 0;
            this.setState({dreamLocation10: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Garage">Garage</button></div>});
        }

        if(e.target.name === "Street" && dreamLocation[10] === 0){
            dreamLocation[10] = 1;
            this.setState({dreamLocation11: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Street">Street</button></div>});
        }
        else if (e.target.name === "Street" && dreamLocation[10] === 1){
            dreamLocation[10] = 0;
            this.setState({dreamLocation11: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Street">Street</button></div>});
        }

        if(e.target.name === "Bridge" && dreamLocation[11] === 0){
            dreamLocation[11] = 1;
            this.setState({dreamLocation12: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Bridge">Bridge</button></div>});
        }
        else if (e.target.name === "Bridge" && dreamLocation[11] === 1){
            dreamLocation[11] = 0;
            this.setState({dreamLocation12: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Bridge">Bridge</button></div>});
        }

        if(e.target.name === "Car" && dreamLocation[12] === 0){
            dreamLocation[12] = 1;
            this.setState({dreamLocation13: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Car">Car</button></div>});
        }
        else if (e.target.name === "Car" && dreamLocation[12] === 1){
            dreamLocation[12] = 0;
            this.setState({dreamLocation13: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Car">Car</button></div>});
        }

        if(e.target.name === "Bus" && dreamLocation[13] === 0){
            dreamLocation[13] = 1;
            this.setState({dreamLocation14: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Bus">Bus</button></div>});
        }
        else if (e.target.name === "Bus" && dreamLocation[13] === 1){
            dreamLocation[13] = 0;
            this.setState({dreamLocation14: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Bus">Bus</button></div>});
        }

        if(e.target.name === "Plane" && dreamLocation[14] === 0){
            dreamLocation[14] = 1;
            this.setState({dreamLocation15: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Plane">Plane</button></div>});
        }
        else if (e.target.name === "Plane" && dreamLocation[14] === 1){
            dreamLocation[14] = 0;
            this.setState({dreamLocation15: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Plane">Plane</button></div>});
        }

        if(e.target.name === "Forest" && dreamLocation[15] === 0){
            dreamLocation[15] = 1;
            this.setState({dreamLocation16: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Forest">Forest</button></div>});
        }
        else if (e.target.name === "Forest" && dreamLocation[15] === 1){
            dreamLocation[15] = 0;
            this.setState({dreamLocation16: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Forest">Forest</button></div>});
        }

        if(e.target.name === "Planet" && dreamLocation[16] === 0){
            dreamLocation[16] = 1;
            this.setState({dreamLocation17: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Planet">Planet</button></div>});
        }
        else if (e.target.name === "Planet" && dreamLocation[16] === 1){
            dreamLocation[16] = 0;
            this.setState({dreamLocation17: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Planet">Planet</button></div>});
        }

        if(e.target.name === "Moon" && dreamLocation[17] === 0){
            dreamLocation[17] = 1;
            this.setState({dreamLocation18: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Moon">Moon</button></div>});
        }
        else if (e.target.name === "Moon" && dreamLocation[17] === 1){
            dreamLocation[17] = 0;
            this.setState({dreamLocation18: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Moon">Moon</button></div>});
        }

        if(e.target.name === "Space" && dreamLocation[18] === 0){
            dreamLocation[18] = 1;
            this.setState({dreamLocation19: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Space">Space</button></div>});
        }
        else if (e.target.name === "Space" && dreamLocation[18] === 1){
            dreamLocation[18] = 0;
            this.setState({dreamLocation19: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Space">Space</button></div>});
        }

        if(e.target.name === "Other" && dreamLocation[19] === 0){
            dreamLocation[19] = 1;
            this.setState({dreamLocation20: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamLocation(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "Other" && dreamLocation[19] === 1){
            dreamLocation[19] = 0;
            this.setState({dreamLocation20: <div><button className="Tags" onClick={(e) => this.handleDreamLocation(e)} name="Other">Other</button></div>});
        }
    }

    handleProminentColors(e){
        if(e.target.name === "None" && prominentColor[0] === 0){
            prominentColor[0] = 1;
            this.setState({prominentColor1: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
            prominentColor[11] = 0;
            this.setState({prominentColor12: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Other">Other</button></div>});
            prominentColor[10] = 0;
            this.setState({prominentColor11: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Brown">Brown</button></div>});
            prominentColor[9] = 0;
            this.setState({prominentColor10: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Black">Black</button></div>});
            prominentColor[8] = 0;
            this.setState({prominentColor9: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="White">White</button></div>});
	        prominentColor[7] = 0;
            this.setState({prominentColor8: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Green">Green</button></div>});
            prominentColor[6] = 0;
            this.setState({prominentColor7: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Pink">Pink</button></div>});
            prominentColor[5] = 0;
            this.setState({prominentColor6: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Purple">Purple</button></div>});
            prominentColor[4] = 0;
            this.setState({prominentColor5: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Yellow">Yellow</button></div>});
            prominentColor[3] = 0;
            this.setState({prominentColor4: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Orange">Orange</button></div>});
            prominentColor[2] = 0;
            this.setState({prominentColor3: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Red">Red</button></div>});
            prominentColor[1] = 0;
            this.setState({prominentColor2: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Blue">Blue</button></div>});
        }
        else if (e.target.name === "None" && prominentColor[0] === 1){
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }

        if(e.target.name === "Blue" && prominentColor[1] === 0){
            prominentColor[1] = 1;
            this.setState({prominentColor2: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Blue">Blue</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Blue" && prominentColor[1] === 1){
            prominentColor[1] = 0;
            this.setState({prominentColor2: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Blue">Blue</button></div>});
            
        }

        if(e.target.name === "Red" && prominentColor[2] === 0){
            prominentColor[2] = 1;
            this.setState({prominentColor3: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Red">Red</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Red" && prominentColor[2] === 1){
            prominentColor[2] = 0;
            this.setState({prominentColor3: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Red">Red</button></div>});
        }

        if(e.target.name === "Orange" && prominentColor[3] === 0){
            prominentColor[3] = 1;
            this.setState({prominentColor4: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Orange">Orange</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Orange" && prominentColor[3] === 1){
            prominentColor[3] = 0;
            this.setState({prominentColor4: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Orange">Orange</button></div>});
        }

        if(e.target.name === "Yellow" && prominentColor[4] === 0){
            prominentColor[4] = 1;
            this.setState({prominentColor5: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Yellow">Yellow</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Yellow" && prominentColor[4] === 1){
            prominentColor[4] = 0;
            this.setState({prominentColor5: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Yellow">Yellow</button></div>});
        }

        if(e.target.name === "Purple" && prominentColor[5] === 0){
            prominentColor[5] = 1;
            this.setState({prominentColor6: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Purple">Purple</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Purple" && prominentColor[5] === 1){
            prominentColor[5] = 0;
            this.setState({prominentColor6: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Purple">Purple</button></div>});
        }

        if(e.target.name === "Pink" && prominentColor[6] === 0){
            prominentColor[6] = 1;
            this.setState({prominentColor7: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Pink">Pink</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Pink" && prominentColor[6] === 1){
            prominentColor[6] = 0;
            this.setState({prominentColor7: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Pink">Pink</button></div>});
        }

        if(e.target.name === "Green" && prominentColor[7] === 0){
            prominentColor[7] = 1;
            this.setState({prominentColor8: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Green">Green</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Green" && prominentColor[7] === 1){
            prominentColor[7] = 0;
            this.setState({prominentColor8: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Green">Green</button></div>});
        }

        if(e.target.name === "White" && prominentColor[8] === 0){
            prominentColor[8] = 1;
            this.setState({prominentColor9: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="White">White</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "White" && prominentColor[8] === 1){
            prominentColor[8] = 0;
            this.setState({prominentColor9: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="White">White</button></div>});
        }

        if(e.target.name === "Black" && prominentColor[9] === 0){
            prominentColor[9] = 1;
            this.setState({prominentColor10: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Black">Black</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Black" && prominentColor[9] === 1){
            prominentColor[9] = 0;
            this.setState({prominentColor10: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Black">Black</button></div>});
        }

        if(e.target.name === "Brown" && prominentColor[10] === 0){
            prominentColor[10] = 1;
            this.setState({prominentColor11: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Brown">Brown</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Brown" && prominentColor[10] === 1){
            prominentColor[10] = 0;
            this.setState({prominentColor11: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Brown">Brown</button></div>});
        }

        if(e.target.name === "Other" && prominentColor[11] === 0){
            prominentColor[11] = 1;
            this.setState({prominentColor12: <div><button className="Tags TagsClicked" onClick={(e) => this.handleProminentColors(e)} name="Other">Other</button></div>});
            prominentColor[0] = 0;
            this.setState({prominentColor1: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="None">None</button></div>});
        }
        else if (e.target.name === "Other" && prominentColor[11] === 1){
            prominentColor[11] = 0;
            this.setState({prominentColor12: <div><button className="Tags" onClick={(e) => this.handleProminentColors(e)} name="Other">Other</button></div>});
        }
    }

    handleDreamActions(e){
        if(e.target.name === "Walking" && dreamAction[0] === 0){
            dreamAction[0] = 1;
            this.setState({dreamAction1: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Walking">Walking</button></div>});
        }
        else if (e.target.name === "Walking" && dreamAction[0] === 1){
            dreamAction[0] = 0;
            this.setState({dreamAction1: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Walking">Walking</button></div>});
        }

        if(e.target.name === "Running" && dreamAction[1] === 0){
            dreamAction[1] = 1;
            this.setState({dreamAction2: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Running">Running</button></div>});
        }
        else if (e.target.name === "Running" && dreamAction[1] === 1){
            dreamAction[1] = 0;
            this.setState({dreamAction2: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Running">Running</button></div>});
        }

        if(e.target.name === "Chased" && dreamAction[2] === 0){
            dreamAction[2] = 1;
            this.setState({dreamAction3: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Chased">Chased</button></div>});
        }
        else if (e.target.name === "Chased" && dreamAction[2] === 1){
            dreamAction[2] = 0;
            this.setState({dreamAction3: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Chased">Chased</button></div>});
        }

        if(e.target.name === "Chasing" && dreamAction[3] === 0){
            dreamAction[3] = 1;
            this.setState({dreamAction4: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Chasing">Chasing</button></div>});
        }
        else if (e.target.name === "Chasing" && dreamAction[3] === 1){
            dreamAction[3] = 0;
            this.setState({dreamAction4: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Chasing">Chasing</button></div>});
        }

        if(e.target.name === "Playing" && dreamAction[4] === 0){
            dreamAction[4] = 1;
            this.setState({dreamAction5: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Playing">Playing</button></div>});
        }
        else if (e.target.name === "Playing" && dreamAction[4] === 1){
            dreamAction[4] = 0;
            this.setState({dreamAction5: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Playing">Playing</button></div>});
        }

        if(e.target.name === "Hiding" && dreamAction[5] === 0){
            dreamAction[5] = 1;
            this.setState({dreamAction6: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Hiding">Hiding</button></div>});
        }
        else if (e.target.name === "Hiding" && dreamAction[5] === 1){
            dreamAction[5] = 0;
            this.setState({dreamAction6: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Hiding">Hiding</button></div>});
        }

        if(e.target.name === "Teaching" && dreamAction[6] === 0){
            dreamAction[6] = 1;
            this.setState({dreamAction7: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Teaching">Teaching</button></div>});
        }
        else if (e.target.name === "Teaching" && dreamAction[6] === 1){
            dreamAction[6] = 0;
            this.setState({dreamAction7: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Teaching">Teaching</button></div>});
        }

        if(e.target.name === "Flirting" && dreamAction[7] === 0){
            dreamAction[7] = 1;
            this.setState({dreamAction8: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Flirting">Flirting</button></div>});
        }
        else if (e.target.name === "Flirting" && dreamAction[7] === 1){
            dreamAction[7] = 0;
            this.setState({dreamAction8: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Flirting">Flirting</button></div>});
        }

        if(e.target.name === "Driving" && dreamAction[8] === 0){
            dreamAction[8] = 1;
            this.setState({dreamAction9: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Driving">Driving</button></div>});
        }
        else if (e.target.name === "Driving" && dreamAction[8] === 1){
            dreamAction[8] = 0;
            this.setState({dreamAction9: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Driving">Driving</button></div>});
        }

        if(e.target.name === "Other" && dreamAction[9] === 0){
            dreamAction[9] = 1;
            this.setState({dreamAction10: <div><button className="Tags TagsClicked" onClick={(e) => this.handleDreamActions(e)} name="Other">Other</button></div>});
        }
        else if (e.target.name === "Other" && dreamAction[9] === 1){
            dreamAction[9] = 0;
            this.setState({dreamAction10: <div><button className="Tags" onClick={(e) => this.handleDreamActions(e)} name="Other">Other</button></div>});
        }
    }

    handleAddOther(e){
        //when not so tired
        //a state of states
        //state placement saved in array
        //when one is removed, loop through and collaspe array
        //spit out new state
        //going to work on the back end.

        if(e.target.name === "Other1" && otherTags[0] === 0){
            otherTags[0] = 2;
            this.setState({otherTags1:  <div className="TagsOtherWrapper"><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="Other1" /><button className="TagsOther__Add" name="Other1" defaultValue ={otherTagsUserInput[0]} onClick={(e) => this.handleAddOther(e)}>x</button></div>});
            otherTags[1] = 1;
            this.setState({otherTags2:  <div className="TagsOtherWrapper"><input className="TagsOther" onChange={(e) => this.handleOther(e)} name="Other1" /><button className="TagsOther__Add" name="Other2" defaultValue ={otherTagsUserInput[1]} onClick={(e) => this.handleAddOther(e)}>+</button></div>});
        }
        else if (e.target.name === "Other1" && otherTags[0] === 2){
            otherTags[0] = 0;
            this.setState({otherTags1: ''});
        }

    }

    handleOther(e){

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
                    {this.state.dreamLocation1}
                    {this.state.dreamLocation2}
                    {this.state.dreamLocation3}
                    {this.state.dreamLocation4}
                    {this.state.dreamLocation5}
                    {this.state.dreamLocation6}
                    {this.state.dreamLocation7}
                    {this.state.dreamLocation8}
                    {this.state.dreamLocation9}
                    {this.state.dreamLocation10}
                    {this.state.dreamLocation11}
                    {this.state.dreamLocation12}
                    {this.state.dreamLocation13}
                    {this.state.dreamLocation14}
                    {this.state.dreamLocation15}
                    {this.state.dreamLocation16}
                    {this.state.dreamLocation17}
                    {this.state.dreamLocation18}
                    {this.state.dreamLocation19}
                    {this.state.dreamLocation20}
                </div>
                <div className="Subtitle">Prominent Color(s)</div>
                <div className="TagsWrappers__Inner">
                    {this.state.prominentColor1}
                    {this.state.prominentColor2}
                    {this.state.prominentColor3}
                    {this.state.prominentColor4}
                    {this.state.prominentColor5}
                    {this.state.prominentColor6}
                    {this.state.prominentColor7}
                    {this.state.prominentColor8}
                    {this.state.prominentColor9}
                    {this.state.prominentColor10}
                    {this.state.prominentColor11}
                    {this.state.prominentColor12}
                </div>
                <div className="Subtitle">Action(s)</div>
                <div className="TagsWrappers__Inner">
                    {this.state.dreamAction1}
                    {this.state.dreamAction2}
                    {this.state.dreamAction3}
                    {this.state.dreamAction4}
                    {this.state.dreamAction5}
                    {this.state.dreamAction6}
                    {this.state.dreamAction7}
                    {this.state.dreamAction8}
                    {this.state.dreamAction9}
                    {this.state.dreamAction10}
                </div>
                <div className="Subtitle">Other</div>
                <div className="TagsWrappers__Inner">
                    {this.state.otherTags1}
                    {this.state.otherTags2}
                    {this.state.otherTags3}
                    {this.state.otherTags4}
                    {this.state.otherTags5}
                    {this.state.otherTags6}
                    {this.state.otherTags7}
                    {this.state.otherTags8}
                    {this.state.otherTags9}
                    {this.state.otherTags10}
                </div>
            <input className="PostSubmit" type="post" defaultValue="Post Dream" />
        </div>
    </div>
        );
    }
}

export default NewDream;
