const header= document.createElement('header')

document.body.appendChild(header)

let nav = document.createElement('nav');

header.appendChild(nav);

const homeBtn = document.createElement('button');
nav.appendChild(homeBtn)
homeBtn.id = 'home-btn';
homeBtn.innerText = 'Home'


const menuBtn= document.createElement('button');
menuBtn.id = 'menu-btn';
menuBtn.innerText = 'Menu';
nav.appendChild(menuBtn)

const contactBtn = document.createElement('button');
contactBtn.id = 'contact-btn';
contactBtn.innerText = 'Contact';
nav.appendChild(contactBtn)




let divContent = document.createElement('div')

divContent.setAttribute('id', 'div-content')

document.body.appendChild(divContent)

export {divContent}

export default function theShit(){

    divContent.innerHTML='';


    let h1 = document.createElement('h1')

    h1.innerText = 'my restaurant'

    let p1 = document.createElement('p')

    p1.innerText = 'we cook bad food here it sucks dont try to buy anything from us'

    let img = document.createElement('img')

    img.src = '../pics/Kidcudimanonthemoonthelegendof.jpg'
     
    let divArray = [h1,p1,img]

    divArray.forEach(element => {
        divContent.appendChild(element)
    });

    
    
}