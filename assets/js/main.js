let getIconDown = document.querySelector(".icon");



// Click to navigation
let navMenuItem = () => {
    let getLine = document.querySelector(".line");
    let getMenuItem = document.querySelectorAll(".menu__item");
    getMenuItem.forEach(element => {
        element.addEventListener("click", (e) => {
            getLine.style.display = "inline-block"
            getLine.style.left = `${e.target.offsetLeft}px`
            getLine.style.width = `${e.target.offsetWidth - 20}px`
        })
    });
}
navMenuItem()