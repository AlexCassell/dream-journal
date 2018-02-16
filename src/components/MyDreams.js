import React, { Component } from 'react';
import '../css/MyDreams.css';
class MyDreams extends Component {
    constructor(props) {
    super(props);
    this.state = {
        'loggedIn': ''
    };
}

    render() {
        return (
        <div className="MyDreams">
            <div className="CalendarWrapper">
                <div className="Calendar__Month">
                January 2018
                </div>
                <div className="Calendar__DayWrapper">
                </div>
                <div className="Calendar__InnerWrapper">
                    <div className="Calendar__Square">
                    </div>
                    <button className="Calendar__Square">1
                    </button>
                    <button className="Calendar__Square">2
                    </button>
                    <button className="Calendar__Square">3
                    </button>
                    <button className="Calendar__Square">4
                    </button>
                    <button className="Calendar__Square">5
                    </button>
                    <button className="Calendar__Square">6
                    </button>
                    <button className="Calendar__Square">7
                    </button>
                    <button className="Calendar__Square">8
                    </button>
                    <button className="Calendar__Square">9
                    </button>
                    <button className="Calendar__Square">10
                    </button>
                    <button className="Calendar__Square">11
                    </button>
                    <button className="Calendar__Square">12
                    </button>
                    <button className="Calendar__Square">13
                    </button>
                    <button className="Calendar__Square">14
                    </button>
                    <button className="Calendar__Square">15
                    </button>
                    <button className="Calendar__Square">16
                    </button>
                    <button className="Calendar__Square">17
                    </button>
                    <button className="Calendar__Square">18
                    </button>
                    <button className="Calendar__SquarePost">19
                    </button>
                    <button className="Calendar__Square">20
                    </button>
                    <button className="Calendar__Square">21
                    </button>
                    <button className="Calendar__Square">22
                    </button>
                    <button className="Calendar__Square">23
                    </button>
                    <button className="Calendar__Square">24
                    </button>
                    <button className="Calendar__Square">25
                    </button>
                    <button className="Calendar__Square">26
                    </button>
                    <button className="Calendar__Square">27
                    </button>
                    <button className="Calendar__Square">28
                    </button>
                    <button className="Calendar__Square">29
                    </button>
                    <button className="Calendar__Square">30
                    </button>
                    <button className="Calendar__Square">31
                    </button>
                    <button className="Calendar__Square">
                    </button>
                    <button className="Calendar__Square">
                    </button>
                    <button className="Calendar__Square">
                    </button>
                </div>
            </div>
            <div className="AllPostsWrapper">
                <div className="PostWrapper">
                    <div className="PostTagsWrapper">
                    <div className="PostTag">home</div> • <div className="PostTag">nightmare</div> • <div className="PostTag">blue monster</div> • <div className="PostTag">tunnel</div> 
                    </div>
                    <div className="PostWrapper__Background" />
                    <div className="PostWrapper__IntroWrapper">
                        <div className="PostWrapper__Intro">
                            A giant blue spider tried to eat my dog.  I ran for the hills, because fuck that dog.  Then the Earth turned into bubblegum and I started sinking into the goo.  I wish I had my dog instead of this poo.
                        </div>
                    </div>
                </div>
                <div className="PostWrapper">
                    <div className="PostTagsWrapper">
                    <div className="PostTag">home</div> • <div className="PostTag">nightmare</div> • <div className="PostTag">blue monster</div> • <div className="PostTag">tunnel</div> 
                    </div>
                    <div className="PostWrapper__Background" />
                    <div className="PostWrapper__IntroWrapper">
                        <div className="PostWrapper__Intro">
                            A giant blue spider tried to eat my dog.  I ran for the hills, because fuck that dog.  Then the Earth turned into bubblegum and I started sinking into the goo.  I wish I had my dog instead of this poo.
                        </div>
                    </div>
                </div>
                <div className="PostWrapper">
                    <div className="PostTagsWrapper">
                    <div className="PostTag">home</div> • <div className="PostTag">nightmare</div> • <div className="PostTag">blue monster</div> • <div className="PostTag">tunnel</div> 
                    </div>
                    <div className="PostWrapper__Background" />
                    <div className="PostWrapper__IntroWrapper">
                        <div className="PostWrapper__Intro">
                            A giant blue spider tried to eat my dog.  I ran for the hills, because fuck that dog.  Then the Earth turned into bubblegum and I started sinking into the goo.  I wish I had my dog instead of this poo.
                        </div>
                        <button className="ViewPost">
                            View Post
                        </button>
                    </div>
                </div>
                </div>
        </div>
        );
    }
}

export default MyDreams;
