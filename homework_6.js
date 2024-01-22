"use strict";
//1
let newDiv = document.createElement("div");
newDiv.classList.add("wraper");

let newImg = document.createElement("img");
newImg.setAttribute(
    "src",
    "https://www.shutterstock.com/image-photo/close-portrait-view-north-american-600nw-2034751628.jpg"
);
newImg.setAttribute("alt", "bobr");

let newHeader = document.createElement("h2");
newHeader.classList.add("title");
newHeader.textContent = "hello";
newHeader.style.fontSize = 30;
newHeader.style.color = "red";

newDiv.appendChild(newImg);
newDiv.appendChild(newHeader);

// document.getElementById("container").appendChild(newDiv);
document.querySelector("#container").appendChild(newDiv);

//2
let text = document.querySelectorAll(".random");
text.forEach(function (item) {
    let newPara = document.createElement("p");
    newPara.textContent = "Hello world!";
    newPara.classList.add("title");
    item.appendChild(newPara);
});

//3
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
