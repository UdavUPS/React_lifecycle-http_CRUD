/* export async function xmlRefrsh1() {
    let res = fetch('http://localhost:7070/notes');
    let answer = await res;
    /* console.log(JSON.parse(await answer.text())); */
    /* let x = JSON.parse(await answer.text()); */
    /* console.log(x);
    return x
} */

/* export async function xmlRefrsh() {
    fetch('http://localhost:7070/notes')
    .then(res => res.json())
    .then(d => {return d});
} */


/**
 * Функция отправки сообщений на сервер 
 * @param {object} text передается объект с свойством "content" и сообщением. Пример: xmlPost({content: "сообщение"})
 */
export async function xmlPost(text) {
    fetch('http://localhost:7070/notes',{
        method: 'POST',
        body: JSON.stringify(text), // данные могут быть 'строкой' или {объектом}!
        headers: {
          "Content-Type": "application/json",
         }
    });
    
}

/**
 * Функция удаления сообщений на сервере
 * @param {integer} id передается id удаляемого сообщения 
 */
export async function xmlDel(id) {
    fetch(`http://localhost:7070/notes/${id}`,{
        method: 'DELETE'
    });
    
};