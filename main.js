let btn = document.querySelector(".dark-mode-btn");
let html = document.querySelector("html");
let ctr = 0 ;

let fonts = document.querySelectorAll(".nav-fonts>i");

btn.addEventListener("click",function() {
    if (ctr % 2 == 0) {
        html.setAttribute("data-bs-theme","dark");
        [...fonts].forEach(element => {
            element.addEventListener("mouseover",function(){
                        element.style.color = "white";
                    })
        });
        [...fonts].forEach(element => {
            element.addEventListener("mouseleave",function(){
                element.style.color = "black" ;
            })
        });
    }
    else if (ctr%2 != 0) {
        html.removeAttribute("data-bs-theme");
        [...fonts].forEach(element => {
            element.addEventListener("mouseover",function(){
                        element.style.color = "black";
                    })
        });
        [...fonts].forEach(element => {
            element.addEventListener("mouseleave",function(){
                element.style.color = "rgba(0, 0, 0, 0.651)" ;
            })
        });
    }
    ++ctr;
})