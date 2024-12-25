// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const section = document.querySelector(".message ")
const close = document.querySelector(".ri-close-line")
close.addEventListener("click", ()=>{
    section.remove()
})