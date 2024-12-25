// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
const star = document.querySelectorAll(".fa-star")
star.forEach(item =>{
    item.addEventListener("click", ()=>{
       if (item.style.color === "orange") {
            item.style.color = "";
        } else {
            item.style.color = "orange";
        }
    }) 
})
