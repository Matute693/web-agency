document.addEventListener("DOMContentLoaded", () => {

    let switcher = document.querySelector(".switcher__btn");
    let dark = document.querySelector(".switcher__icon-dark");
    let light = document.querySelector(".switcher__icon-light");

    switcher.addEventListener("click", () => {
        let head = document.querySelector("head")


    let link = document.createElement("link"); 
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assests/css/dark-mode.css";
        link.id = "theme-dark";

        let theme_dark = document.querySelector("#theme-dark");
        if(theme_dark) {
            head.removeChild(theme_dark);
            dark.style.display = "none"
            light.style.display = "block";
        }else {
            head.appendChild(link)
            dark.style.display = "block"
            light.style.display = "none";
        }

    });

})