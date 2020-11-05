import './App.css';
import Input from './hw1/Input/Input';
import Poker from './hw1/Poker/Poker';
import React, {Component} from 'react';
import {ctoi} from './utiti/ctoi';
import {selectionSort} from './utiti/selectionSort';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import FlipMove from 'react-flip-move';

class App extends Component{
  state = {
    waiting: true,
    cards: [],
    index: 0,
  }

  changeWaiting = () => {
    const tmp = this.state.waiting;
    this.setState({
      waiting: !tmp,
      index: 0
    });
  }

  sendText = (string) => {
    const crt = this.state.waiting;
    
    this.setState({
        waiting: !crt,
        cards: ctoi(string.split(",")),
      })
  }

  goSort = () => {
    if(this.state.index != this.state.cards.length - 1){
      let tc = selectionSort(this.state.cards,this.state.index);
      this.setState({
        cards: tc,
        index: this.state.index + 1
      })
    }
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
                    <div>
                      <FlipMove
                      className = 'd-flex justify-content'
                      duration = '500'
                      >
                        {this.state.cards.map((card) => {
                          return(
                            <Poker
                              key = {card} /*{Math.random()}*/
                              card={card}
                            />
                          )
                        })}
                      </FlipMove>
                    </div>
                    
                    <MDBRow center>
                    <button onClick={this.changeWaiting}>
                      重新輸入
                    </button>
                    <button onClick={this.goSort}>
                      go sort
                    </button>
                    {/* <img src={spade} alt="spade" /> */}
                  </MDBRow>
                </>
              }
            </MDBContainer>
          </div>
      );
    }
}

export default App;
