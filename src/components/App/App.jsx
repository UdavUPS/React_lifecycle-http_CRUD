/* import { useState, useRef, useEffect } from 'react'; */
/* import uniqid from 'uniqid'; */
import './App.css' 
import { MessageComponent } from '../MessageComponent/MessageComponent.jsx';
import { InputMessage } from '../InputMessage/InputMessage.jsx';
/* let elem = []; */


function App() {

  function closeMessage(e) {
    let messageBlock = e.target.parentElement.parentElement;
    if (messageBlock.classList.contains('delSim')) {
      messageBlock = messageBlock.parentElement;
    }
    messageBlock = messageBlock.parentElement;
    console.log(messageBlock);
  }

 
  return (
    <div className="app-body">
      <div className="app-body__header">
        <h1 className="app-body__header__title">CRUD</h1>
      </div>
      <div className="app-body__message-box">
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
        <MessageComponent onClick={(e) => { closeMessage(e) }}/>
      </div>
      <div className="app-body__message-input">
        <InputMessage />
      </div>
    </div>
  )
}

export default App
