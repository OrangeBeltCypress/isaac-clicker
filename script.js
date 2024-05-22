const char = document.querySelector(".char")
const clicks = document.querySelector(".clicks")

let a = 0

char.addEventListener("mousedown", ()=>{
    a+=9999999999999999
    clicks.innerHTML = "Clicks:" + a
})