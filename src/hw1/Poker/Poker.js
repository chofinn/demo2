import React from 'react';
/*import spade from './spade.png';
import heart from './heart.png';
import club from './club.png';
import diamond from './diamond.png';*/
import {MDBCard} from 'mdbreact'

const poker = (props) => {
    return (
        <div>
            <MDBCard className="poker m-3 p-3" >
                {props.card}
            </MDBCard>
        </div>
    )
};

export default poker;