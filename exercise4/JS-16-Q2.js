// ? Remember domthis.js from your session?
// todo1: Look at the code below, fix it, and explain how you resolved the problem.

// 1)
// rgb(${r}${g}${b}) بین r ,g و b  باید ویرگول باشد

// 2)
//this 
// در Arrow Function 
// به window 
// برمیگردد اما ما میخواهیم به 
// element موردنظرمان (h1, button) برگردد
//  که برای اینکار باید
//   Arrow Function 
// را به reular function 
//   تبدیل کنیم چون 
// this  در regular function
//  به element
//  مورد نظر برمی گردد.

// Note: In this code, console.log and console.dir should refer to the button and h1 element, not the window.

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", function() {
    console.log(this);
    console.dir(this);
    button.style.backgroundColor = makeRandColor();
    button.style.color = makeRandColor();
    
  });
}

const h1s = document.querySelectorAll("h1");
for (const h1 of h1s) {
  h1.addEventListener("click", function() {
    console.log(this);
    console.dir(this);
    h1.style.backgroundColor = makeRandColor();
    h1.style.color = makeRandColor();
    
  });
}
