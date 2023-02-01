
window.onload = function() {
    
    const menu_btn = document.querySelector(".burger");
    const mobile_menu = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".overlay");
    
    const dropdown_li = document.querySelectorAll(".dropdown-li");
    const arrow_btn = document.querySelectorAll(".dropdown-arrow");
    const dropdown_menu = document.querySelectorAll(".dropdown-menu");

    menu_btn.addEventListener("click", function() {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
        overlay.classList.toggle("is-active");
    });

    dropdown_li.forEach( (btn, i) => {
        btn.addEventListener("click", function() {
            dropdown_menu[i].classList.toggle("display");
            arrow_btn[i].classList.toggle("rotate");
        });
    });

}
