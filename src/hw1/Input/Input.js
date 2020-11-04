import { MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import React, {useState} from 'react';

const Input = ({click}) => {
    const [text, settext] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        click(text);
    }

    return (
        <form className="Input" onSubmit = {onSubmit}>
            <MDBRow center><span>請輸入</span></MDBRow>
            <MDBRow center><input type="text" value = {text} onChange={(e) =>{settext(e.target.value)}} className = 'm-3'/></MDBRow>
            <MDBRow center><button type = "submit" >確認</button></MDBRow>            
        </form>
    )
};

export default Input;