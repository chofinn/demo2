import './App.css';
import Input from './hw1/Input/Input';
import Poker from './hw1/Poker/Poker';
import React, {Component} from 'react';
import {ctoi} from './utiti/ctoi';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';

class App extends Component{
  state = {
    waiting: true,
  }

  cards = [];

  changeWaiting = () => {
    const tmp = this.state.waiting;
    this.setState({waiting: !tmp});
  }

  sendText = (string) => {
    const crt = this.state.waiting;
    this.cards = ctoi(string.split(","));
    
    this.setState({
        waiting: !crt
      })
  }
  render () {
      return (
          <div className="app">
            <MDBContainer>
              {
                this.state.waiting && <MDBRow center middle>
                <MDBCol>
                  <Input click={this.sendText}/>
                </MDBCol>
              </MDBRow>
              }

              {
                !this.state.waiting && <>
                    <MDBRow className = '' center>
                      {this.cards.map((card) => {
                        return(
                          <Poker
                            card={card}
                          />
                        )
                      })}
                    </MDBRow>
                    
                    <MDBRow center>
                    <button onClick={this.changeWaiting}>
                      重新輸入
                    </button>
                  </MDBRow>
                </>
              }
            </MDBContainer>
          </div>
      );
    }
}

export default App;
