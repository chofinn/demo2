import React, {useEffect, forwardRef} from 'react';
import spade from './spade.png';
import heart from './heart.png';
import club from './club.png';
import diamond from './diamond.png';
import {MDBCard} from 'mdbreact'
import "./style.css";

const Poker = forwardRef((props, ref) => {
    let suits = [club, diamond, heart, spade];
    let num;
    switch(props.card % 13 + 1){
        case 1:
            num = 'A';
            break;
        case 11:
            num = 'J';
            break;
        case 12:
            num = 'Q';
            break;
        case 13:
            num = 'K';
            break;
        default:
            num = props.card % 13 + 1;
    }

    return (
        <div className = 'm-3 d-flex' ref = {ref}>
            <MDBCard className="poker p-3">
                {/* {suit} */}
                <img src={suits[Math.floor((props.card - 1) / 13)]} alt="suit" className="flower"/>
                <span className = 'text-white' style = {{position:"absolute", left: '50%', top: '50%', transform: "translate(-50%,-50%)"}}>{num}</span>
            </MDBCard>
        </div>
    )
})

export default Poker;