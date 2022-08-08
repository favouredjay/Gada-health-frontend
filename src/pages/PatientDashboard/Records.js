import React, {useState} from 'react';
import QRCode from "qrcode.react";

export default function Records() {

    const [state, setState] = useState("Chief complaint: Stomach pain. History: Lorem ipsum dolor sit amet, consectetur adipiscing");
    const [show, setShow] = useState(false);

    const toggleShow = ()=>{
        setShow(!show);
    }


  return (
    <div>
        <h1>Records</h1>
       <div style={{marginLeft: '40px'}}> 
       <button onClick={toggleShow}>Share records</button>
       <div>{show &&  <QRCode value={state} style={{marginRight: 50 }} />}</div></div>
    </div>
  )
}

  