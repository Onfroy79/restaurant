import { divContent } from "./mpage"

export default function menu(){
    divContent.innerHTML='';
    let h1 = document.createElement('h1')
    h1.innerText='the menu'

    divContent.appendChild(h1)

    let flafelDiv = document.createElement('div')
    document.body.appendChild(flafelDiv)

    let h2 = document.createElement('h2');
    h2.innerText='flafel';

    let flafelP = document.createElement('p');
    flafelP.innerText = '1. Soak chickpeas for 24 hours. Cover them in plenty of water and add baking soda to help soften them as they soak.The chickpeas will at least double in size as they soak. Drain very well.2. Make mixture. Add chickpeas, fresh herbs (parsley, cilantro, and dill), garlic, onion, and spices to food processor and pulse a little bit at a time until the mixture is finely ground. You’ll know it’s ready when the texture is more like coarse meal.'

    let flafelimg= document.createElement('img')
    flafelimg.src ='src/pics/download (3).jpg'

    let flafelArray = [h2,flafelP,flafelimg];

    flafelArray.forEach(function(e){
        flafelDiv.appendChild(e)
    })

    divContent.appendChild(flafelDiv)

}

