/* import { useState, useRef, useEffect } from 'react'; */
/* import uniqid from 'uniqid'; */
import { useState, useEffect } from 'react';
import './App.css' 
import { MessageComponent } from '../MessageComponent/MessageComponent.jsx';
import { InputMessage } from '../InputMessage/InputMessage.jsx';
import { xmlRefrsh, xmlPost } from './functionsForApp.js';

let elems = [];


function App() {

  const [notes, setNotes] = useState([]);

  // Функция для получения всех заметок
  const fetchNotes = async () => {
      const response = await fetch('http://localhost:7070/notes');
      const data = await response.json();
      setNotes(data);
    };

  // Получение заметок при монтировании компонента
  useEffect(() => {
    fetchNotes();
  }, []);

  // Обновление и перерисовка компонентов в случае обновления сообщений
  useEffect(() => {
    fetchNotes();
  }, [notes]);

  // Функция удаления элемента
  function closeMessage(e) {
    let messageBlock = e.target.parentElement.parentElement;
    if (messageBlock.classList.contains('delSim')) {
      messageBlock = messageBlock.parentElement;
    }
    messageBlock = messageBlock.parentElement;
    xmlPost({content: "sdf"})
    console.log(messageBlock);
    fetchNotes();
  }

 
  return (
    <div className="app-body">
      <div className="app-body__header">
        <h1 className="app-body__header__title">CRUD</h1>
      </div>
      <div className="app-body__message-box">
        {notes.map((item) => (
          <MessageComponent key={item.id} messageText = {item.content} onClick={(e) => {closeMessage(e)}}/>
        ))}
      </div>
      <div className="app-body__message-input">
        <InputMessage forPost={xmlPost} />
      </div>
    </div>
  )
}


































function App_old() {

  const [messgesFromServer, setMessgesFromServer] = useState(null);
  const [updete, setupdete] = useState(0)

  /*async function gettingMessages() {
    let ms = xmlRefrsh();
     console.log(await ms) 
    setMessgesFromServer(await ms)
  }*/

   useEffect(()=>{
    /* gettingMessages(); */
    fetch('http://localhost:7070/notes')
    .then(res => res.json())
    .then(d => {setMessgesFromServer(d)})
    .then(console.log(messgesFromServer));
     return  /* xmlPost({content: "sdf"}) */ 
  },[])

  useEffect(()=>{
    /* console.log(messgesFromServer.length); */
    /* addMessages(); */
    setupdete(updete + 1);
  },[messgesFromServer])
  

  function closeMessage(e) {
    let messageBlock = e.target.parentElement.parentElement;
    if (messageBlock.classList.contains('delSim')) {
      messageBlock = messageBlock.parentElement;
    }
    messageBlock = messageBlock.parentElement;
    xmlPost({content: "sdf"})
    console.log(messageBlock);
  }

  function addMessages() {
    elems = messgesFromServer.filter(item => {
      console.log(elems);
      <MessageComponent key={item.id} messageText = {item.content} onClick={(e) => { closeMessage(e) }}/>
    })
    console.log(elems);
    return elems;
  }

 
  return (
    <div className="app-body" up={updete} onClick={addMessages}>
      <div className="app-body__header">
        <h1 className="app-body__header__title">CRUD</h1>
      </div>
      <div className="app-body__message-box">
        <MessageComponent messageText = "asdsd" onClick={(e) => { closeMessage(e) }}/>
          {elems}
      </div>
      <div className="app-body__message-input">
        <InputMessage />
      </div>
    </div>
  )
}

export default App
