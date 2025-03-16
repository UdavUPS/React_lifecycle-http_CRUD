import { useRef } from "react";
import './InputMessage.css';
const postSimbol = (<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>send-email</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" > <g id="Icon-Set-Filled" transform="translate(-570.000000, -257.000000)" fill="#000000"> <path d="M580.407,278.75 C581.743,281.205 586,289 586,289 C586,289 601.75,258.5 602,258 L602.02,257.91 L580.407,278.75 L580.407,278.75 Z M570,272 C570,272 577.298,276.381 579.345,277.597 L601,257 C598.536,258.194 570,272 570,272 L570,272 Z" id="send-email" > </path> </g> </g> </g></svg>);

/**
 * Компонент для ввода и отправки сообщений на сервер
 * @param {функция} forPost передается POST функция для отправки  
 */
export function InputMessage({forPost}) {
    const inputRef = useRef(null);

    function postMessage() {
        let textAr = inputRef.current;
        console.log(textAr.value);
        forPost({content: textAr.value});
        textAr.value = '';
    }

    return (
        <div className="iput-box"  >
            <textarea type="text" className="iput-box__input" ref={inputRef} />
            <div className="iput-box__post"><p className="postSim" onClick={postMessage}>{postSimbol}</p></div>
        </div>
    )
}