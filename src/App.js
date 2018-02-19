import React, { Component } from 'react';
import './css/App.css';
import './css/Menu.css';
import Login from './components/Login';
import NewDream from './components/NewDream';
import Settings from './components/Settings';
import BottomAds from './components/BottomAds';
import MyDreams from './components/MyDreams';

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
        'bottomAds': '',
    };
  }

  componentWillMount(){
    // window.outerWidth
    this.checkIfLoggedIn();

    if(window.outerWidth < 1000){
    this.setState({menu:
      <div id="menuToggle">
      <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
      <ul className="menu">
        <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons" name="recent" onClick={(e) => this.closeMenu(e)}>Your Dreams</button></div>
        <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons">New Dream</button></div>
        <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons">Search Your Dreams</button></div>
        <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons">Browse Dreams</button></div>
        <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons" name="settings" onClick={(e) => this.closeMenu(e)}>Settings</button></div>
      </ul>
    </div>
  });
    }
    else if(window.outerWidth > 999){
      this.setState({menu:
        <div className="Header">
          <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons" name="recent" onClick={(e) => this.closeMenu(e)}>Your Dreams • </button></div>
          <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons">New Dream • </button></div>
          <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons">Search Your Dreams • </button></div>
          <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons">Browse Dreams • </button></div>
          <div className="Menu__Buttons__HoverEffect"><button className="Menu__Buttons" name="settings" onClick={(e) => this.closeMenu(e)}>Settings • </button></div>
        </div>
      });
    }
    
  }

  checkIfLoggedIn(){
    if(email === null){
      setTimeout(this.checkIfLoggedIn.bind(this), 200);
      this.setState({loggedIn:<Login />});
    }
    else{
      this.setState({loggedIn:
        <div>
          {this.state.menu}
          < NewDream />
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
      {this.state.bottomAds}
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
      <MyDreams />
      {this.state.bottomAds}
      </div>
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn}
      </div>
    );
  }
}

export default App;
