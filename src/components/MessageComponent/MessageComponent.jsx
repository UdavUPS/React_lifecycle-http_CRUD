import './MessageComponent.css';
const delSimbol = (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
    <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
    </svg>);

/**
 * Компонент вывода сообщений
 *
 * @param {string} messageText передается текст сообщения
 * 
 */

export function MessageComponent ({messageText, onClick, mesID}) {

    function doClose(e) {
        onClick(e);
      }

    return (
        <div className="mes-box" id={mesID}>
            <div className="mes-box__closure" onClick={doClose}><p className="delSim" >{delSimbol}</p></div>
            <div className="mes-box__text">{messageText}</div>
        </div>
    )
}