/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/


const circle1 = document.querySelector(".c1") 
const circle2 = document.querySelector(".c2") 
const circle3 = document.querySelector(".c3") 
const circle4 = document.querySelector(".c4")
const text = document.querySelector("#t1")
circle1.addEventListener("click", () => {
  text.value = text.value.slice(0, -1)
})
circle2.addEventListener("click", () => {
  text.value = "" 
})
circle3.addEventListener("click", () => {
  if (text.style.fontWeight === "bold") {
    text.style.fontWeight = "normal"
  } else {
    text.style.fontWeight = "bold"
  }
})
circle4.addEventListener("click", () => {
  if (text.style.fontStyle === "italic") {
    text.style.fontStyle = "normal"
  } else {
    text.style.fontStyle = "italic"
  }
})