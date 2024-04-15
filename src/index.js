import theShit from "./mpage"
import menu from "./menu"
import contact from "./contact"

theShit()

let home = document.querySelector('#home-btn')
let menuu = document.querySelector('#menu-btn')
let contactt = document.querySelector('#contact-btn')
let buttons = document.querySelectorAll('button')


  
let turn = 0;

function buttonsFunction(){
 
 home.addEventListener('click', ()=>{
  theShit()
 })

  menuu.addEventListener('click', ()=>{
    menu()
  })

  contactt.addEventListener('click', ()=>{
    contact()
  })



}
    
buttonsFunction()





/*
buttons.forEach((chosen) => {
  chosen.addEventListener('click', () => {
      chosen.setAttribute('id','clicked');
    });
})


function excute(){
  if (turn==1){
    theShit()
  } else if (turn == 2){
    menu()
  } else if (turn==3){
    contact()
  }
}


excute()

*/
