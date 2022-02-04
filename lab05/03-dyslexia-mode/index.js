/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexiaMode = () => {
  if (dmode)
  {
    document.querySelector('body').className = "";
    document.querySelector('.content').style.margin = "0px";
    dmode = false;
  }
  else
  {
    document.querySelector('body').className = "dyslexia-mode";
    document.querySelector('.content').style.margin = "15%";
    dmode = true;
  }
};

dmode = false;

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaMode);