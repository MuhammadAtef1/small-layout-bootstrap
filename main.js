let btn = document.querySelector(".dark-mode-btn");
let html = document.querySelector("html");
let ctr = 0 ;

console.log(btn);

btn.addEventListener("click",function() {
    if (ctr % 2 == 0) {
        html.setAttribute("data-bs-theme","dark");
    }
    else if (ctr%2 != 0) {
        html.removeAttribute("data-bs-theme");
    }
    ++ctr;
})