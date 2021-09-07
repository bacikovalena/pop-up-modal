const parent  = document.querySelector(".modal-parent");
const btn = document.querySelector("button");
const X = document.querySelector(".X");
const section = document.querySelector("section");

btn.addEventListener("click", appear);

function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)"
}

X.addEventListener("click", dissapearX);
function dissapearX () {
  parent.style.display = "none";
  section.style.filter = "blur(0px)"
}

parent.addEventListener("click", dissapearParent)
function dissapearParent(e) {
  if(e.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)" 
  }
}