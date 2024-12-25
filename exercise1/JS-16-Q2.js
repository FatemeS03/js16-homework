//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:
const para = document.querySelector("button p")
const button = document.querySelector("button")
console.log(getComputedStyle(button).borderColor)
const icon = document.querySelector(".ri-handbag-line")

button.addEventListener("click", () => {
    para.textContent = "Added to Cart"
    button.disabled = true
    button.style.backgroundColor = "rgb(81, 66, 252)"
    icon.remove()
   
})