import { divContent } from "./mpage"

export default function contact() {
    divContent.innerHTML='';

    let contactDiv = document.createElement('div')
    document.body.appendChild(contactDiv)

    let number = document.createElement('h2')
    number.innerText='number:0106678854'
    contactDiv.appendChild(number)

    let adress=document.createElement('h2')
    adress.innerText='adress:i live with my parents lmao'
    contactDiv.appendChild(adress)

    divContent.appendChild(contactDiv)
}

