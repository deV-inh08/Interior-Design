window.addEventListener("load", () => {
    const handleDisplaySubMenu = () => {
        const getIconDown = document.querySelector(".icon__up");
        getIconDown.addEventListener("click", (e) => {
            const subMenu = e.target.childNodes[1];
            if(e.target.classList.contains("fa-chevron-up")) {
                e.target.classList.remove("fa-chevron-up");
                e.target.classList.add("fa-chevron-down")
                subMenu.style.opacity = "1";
                subMenu.style.visibility = "visible";
            } else {
                e.target.classList.remove("fa-chevron-down");
                e.target.classList.add("fa-chevron-up");
                subMenu.style.opacity = "0";
                subMenu.style.visibility = "hidden";
            }
        })
    };
    handleDisplaySubMenu();

    const handleLine = () => {
        const getMenuItems = document.querySelectorAll(".menu__item");
        const getLine = document.querySelector(".line");
        getMenuItems.forEach((item, index) => {
            item.addEventListener("click", (e) => {
                if(e.target.classList.contains("fa-solid")) return;
                let points = e.target.getBoundingClientRect();
                getLine.style.left = (points.left) + "px";
                getLine.style.top = (points.top + points.height + 4) + "px";
                getLine.style.width = (points.width * 0.6) + "px";
            })
        })
    };
    handleLine();
})