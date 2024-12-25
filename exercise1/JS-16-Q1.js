// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
  const heart = document.querySelector(".cards__card__img__icon i")
  let num = document.querySelector("#counter")

  heart.addEventListener("click", () => {
    heart.style.color = "red"
    num.textContent = parseInt(num.textContent)+1
  })