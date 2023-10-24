document.addEventListener("DOMContentLoaded", (event) => {
  
    // SELECCIONO mis dos elementos principales
    let mobile__btn = document.querySelector('.navbar__mobile-btn');
    let mobile__menu = document.querySelector('.menu-mobile');


    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");
        
        if(show) {
            mobile__menu.classList.remove("menu-mobile--show")
        } else {              
            mobile__menu.classList.add("menu-mobile--show");
        }
    }
    
    // EVENT open menu mobile 
    mobile__btn.addEventListener("click", () => {
      showHiddenMenu()
    })
    
    
    
    // EVENTO RESIZE EN MENU RESPONSIVE
    window.addEventListener('resize', () => {
        let size = parseInt(document.body.clientWidth);
        if(size >= 1000) {
            mobile__menu.classList.remove('menu-mobile--show');
            
        }
    })
    
    
    // Event close menu mibile 
    let btn__close = document.querySelector('.menu-mobile__close')
    btn__close.addEventListener("click", () => {
        showHiddenMenu();
    });


    // DESPLEGAR SUBMENUS 

    let menu__item = document.querySelectorAll(".menu-mobile__item");

    menu__item.forEach(item => {
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;
            
            if(submenu.classList = "menu-mobile__submenu-mobile") {
                if(submenu.style.display === "block") {
                    submenu.style.display = "none";
                }else {
                    submenu.style.display = "block";
                }
            }
        })
    })


});