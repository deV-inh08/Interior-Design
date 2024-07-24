// Handle navigation
let navMenuItem = () => {
    let getLine = document.querySelector(".line");
    let getMenuItem = document.querySelectorAll(".menu__item");
    let cloneSubMenu = null;
    getMenuItem.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            if(cloneSubMenu) {
                cloneSubMenu.remove()
            };
            let templateSubMenu = document.createElement("ul");
            templateSubMenu.className = `list__child ${e.target.text.toLowerCase()}`
            templateSubMenu.innerHTML = 
            `<div>
                    <li class="item__child">
                        <a href="" class="item__child--link">${e.target.text} 1</a>
                    </li>
                    <li class="item__child">
                        <a href="" class="item__child--link">${e.target.text} 2</a>
                    </li>
                    <li class="item__child">
                        <a href="" class="item__child--link">${e.target.text} 3</a>
                    </li>
                    <li class="item__child">
                        <a href="" class="item__child--link">${e.target.text} 4</a>
                    </li>
                    <li class="item__child">
                        <a href="" class="item__child--link">${e.target.text} 5</a>
                    </li>
                </div>`
            getLine.style.display = "inline-block"
            getLine.style.left = `${e.target.offsetLeft}px`
            getLine.style.width = `${e.target.offsetWidth - 20}px`

            e.target.appendChild(templateSubMenu);
            cloneSubMenu = templateSubMenu;
        })
    });
    
    document.addEventListener("click", (e) => {
        if (!e.target.closest('.menu__item') && currentSubMenu) {
            let oldSubMenu = document.querySelector(".list__child");
            if (oldSubMenu) {
                oldSubMenu.remove();
            }
            currentSubMenu = null;
        }
    });
}
navMenuItem();