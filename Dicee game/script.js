let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomImage = document.querySelector(".img1"); 
let randomImage2 = document.querySelector(".img2"); 

randomImage.setAttribute("src", "/Images/dice" + randomNumber1 + ".png");
randomImage2.setAttribute("src", "/Images/dice" + randomNumber2 + ".png");

let h1 = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
    h1.innerHTML = "DRAW!";
} else if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 Wins!";
} else {
    h1.innerHTML = "Player 2 Wins!";
};
