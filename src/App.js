import React, { Component } from 'react';
import './css/App.css';
import './css/Menu.css';
import Login from './components/Login';
import Settings from './components/Settings';
import BottomAds from './components/BottomAds';
import RecentDreams from './components/MyRecentDreams';

import {email} from './components/Login';

let paid = false; //will be imported

let settingsOpened = false;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        'loggedIn': '',
        'menu': '',
        'page':'',
        'bottomAds': ''
    };
  }

  componentWillMount(){
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn(){
    if(email === null){
      setTimeout(this.checkIfLoggedIn.bind(this), 200);
      this.setState({loggedIn:<Login />});
    }
    else{
      this.setState({menu:
        <div id="menuToggle">
        <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          <ul className="menu">
            <button className="Menu__Buttons" name="recent" onClick={(e) => this.closeMenu(e)}>Your Dreams</button>
            <button className="Menu__Buttons">New Dream</button>
            <button className="Menu__Buttons">Search Your Dreams</button>
            <button className="Menu__Buttons">Browse Dreams</button>
            <button className="Menu__Buttons" name="settings" onClick={(e) => this.closeMenu(e)}>Settings</button>
          </ul>
        </div>      
        });
      this.setState({loggedIn:
        <div>
          {this.state.menu}
          {this.state.body}
        </div>
      });
      if(paid){
        this.setState({bottomAds:''});
      }
      else{
        this.setState({bottomAds:<BottomAds />});
      }
    }
  }



  closeMenu(e){      
    this.setState({loggedIn:
        <div> 
        </div>
      });
    console.log(e.target.name);
    if(e.target.name === "settings"){
      setTimeout(this.openSettings.bind(this), 200);
    }
    else if (e.target.name === "recent"){
      setTimeout(this.myDreams.bind(this), 200);
    }
  }

  openSettings(){
    this.setState({loggedIn:
      <div> 
      {this.state.menu}
      <Settings />
      </div>
    });
    settingsOpened = true;
    this.checkIfLoggedOut();
  }

  checkIfLoggedOut(){
    if(settingsOpened){
      setTimeout(this.checkIfLoggedOut.bind(this), 500);
      console.log("Check");
    }

    if(email === null){
      this.checkIfLoggedIn();
      settingsOpened = false;
    }
  }

  myDreams(){
    settingsOpened = false;
    this.setState({loggedIn:
      <div> 
      {this.state.menu}
      <RecentDreams />
      </div>
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn}
        {this.state.bottomAds}
      </div>
    );
  }
}

export default App;
