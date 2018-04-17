import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import scenes from './scenes.json'

import backgroundImageToShow from "./images/Background-Pic2.jpg";

class App extends Component {
  constructor(){
    super();

    this.state = {
      score: 0,
      scene_num : 0,
      scenes : [
        {
          text : "Mark Zuckerberg faced 600 tough questions. He drank water at each every question, one of the question was WHICH HOTEL WERE YOU STAYING LAST LANIGHT? if you're Mark Zuckerberg what will be your response?",
          image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHH7bZgnSy7dtSBG1UIt3Sv_Ai55jGM0UWoS_6pfKujs7uaZQY",
          options : [
            {
              text: "Trump Tower",
              send_to: 1,
              answer: true
            },
            {
              text: "I did not lodge in hotel, I was offered an executive room at Russian Embassy",
              send_to: 1,
              answer: false
            },
            {
              text: "I did not lodge in hotel to be honest, actually i stayed with a friend of mine which happened to my Ex",
              send_to: 1,
              answer: false
            },
            {
              text: "I will ask my team to get back to you on that",
              send_to: 1,
              answer: false
            } 
          ],
        },
        {
          text : "3 guys are on a boat and they have 4 cigarettes but nothing to light them with. What do they do?",
          image : "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/20/2015/02/LRHartlepool-rnli-yacht-fire-22-08-14.jpg",
          options : [
            {
              text: "Light the cigarret with the steam engine",
              send_to: 2,
              answer: false
            },
            {
              text: "Raise the cigarret up to the sky",
              send_to: 2,
              answer: false
            },
            {
              text: "Radio the next boat if they have lighter",
              send_to: 2,
              answer: true
            },
            {
              text: "but everything changed when the fire nation attacked",
              send_to: 2,
              answer: false
            } 
          ],
        },
        {
          text : "You’re having lunch with three people you respect and admire.  They all start criticizing a close friend of yours, not knowing she is your friend.  The criticism is distasteful and unjustified.  What do you do?",
          image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiq_2g9dpx-gIBJaFJ2vxIZ5lwE3mPlhQOgKVwW7IRBibGtUbsQ",
          options : [
            {
              text: "Find out why criticizing my best friend",
              send_to: 3,
              answer: true
            },
            {
              text: "play along later tell my best friend to be careful",
              send_to: 3,
              answer: false
            },
            {
              text: "Leave immediately don't want to be part of it",
              send_to: 3,
              answer: false
            },
            {
              text: "I'll tell them to ask for forgiveness",
              send_to: 3,
              answer: false
            } 
          ],
        },
        {
          text : "If president Trump said Donante $10 Million dollars for building a wall and you have a brick with your name on it added. whould you do it?.",
          image : "https://movietvtechgeeks.com/wp-content/uploads/2017/04/will-donald-trumps-wall-hold-congress-budget-up.jpg",
          options : [
            {
              text: "I won't donate a penney",
              send_to: 4,
              answer: true
            },
            {
              text: "Will you rather donate to childrern hospital",
              send_to: 4,
              answer: false
            },
            {
              text: "I will donate and make sure He's not lying",
              send_to: 4,
              answer: false
            },
            {
              text: "I'll donate on one conditioin, if they create a passage route",
              send_to: 4,
              answer: false
            } 
          ],
        },
        {
          text : "want to play again?",
          image : "https://i.ytimg.com/vi/jYsQaFNFz_c/maxresdefault.jpg",
          options : [
            {
              text: "play again",
              send_to: 0,
              answer: false
            }
          ],
        }
      ]
    }
  }

  nextScene = (s, a) => {
    //in this function change scene_num in state to whatever gets passed in
    //then check if it works by clicking the buttons
    let score = this.state.score;

    if (s == 0){
      score = 0;
    }else {
      if (a) score++;
    }

    this.setState({scene_num : s, score: score});
  }

  render() {
      const divStyle = {
        backgroundImage: `url(${backgroundImageToShow})`,
        height: "180vh",
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top",
        backgroundSize: "cover"
      };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Adventure Game</h1>
        </header>

        {/* <img src="./images/Background-Pic1.jpg" alt="background picture"/> */}
        <div style={divStyle}>
          <p>{this.state.name}</p>
          <p>
            show score {this.state.score}
          </p>
          <p>{this.state.scenes[this.state.scene_num].text}</p>

          <img src={this.state.scenes[this.state.scene_num].image} width="300" height="300" />

          {this.state.scenes[this.state.scene_num].options.map((op, i) => 
            <div key={i}>
              <button onClick={() => this.nextScene(op.send_to, op.answer)}>{op.text}</button>
              <br />
            </div>
          )}
          {/*12:40*/}

          <br /><br /><br /><br />

        </div>


      </div>
    );
  }
}

export default App;