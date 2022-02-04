const makeBigger = () => {
   fsize += 5;
   document.querySelector("p").style.fontSize = fsize + "px";
   document.querySelector("h1").style.fontSize = (fsize + 10) + "px";
};

const makeSmaller = () => {
   fsize -= 5;
   document.querySelector("p").style.fontSize = fsize + "px";
   document.querySelector("h1").style.fontSize = (fsize + 10) + "px";
};

fsize = 15;


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
