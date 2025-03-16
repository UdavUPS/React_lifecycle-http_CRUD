

/* export async function xmlRefrsh1() {
    let res = fetch('http://localhost:7070/notes');
    let answer = await res;
    /* console.log(JSON.parse(await answer.text())); */
    /* let x = JSON.parse(await answer.text()); */
    /* console.log(x);
    return x
} */

export async function xmlRefrsh() {
    fetch('http://localhost:7070/notes')
    .then(res => res.json())
    .then(d => {return d});
}



export async function xmlPost(text) {
    fetch('http://localhost:7070/notes',{
        method: 'POST',
        body: JSON.stringify(text), // данные могут быть 'строкой' или {объектом}!
        headers: {
          "Content-Type": "application/json",
         }
    });
    
}