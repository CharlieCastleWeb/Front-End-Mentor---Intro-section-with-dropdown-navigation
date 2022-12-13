
window.onload = function() {
    
    const menu_btn = document.querySelector(".burger");
    const mobile_menu = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".overlay");
    
    const arrow_btn = document.querySelectorAll(".dropdown-arrow");
    const dropdown_menu = document.querySelectorAll(".dropdown-menu");

    menu_btn.addEventListener("click", function() {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
        overlay.classList.toggle("is-active");
    });

    arrow_btn.forEach( (btn, i) => {
        btn.addEventListener("click", function() {
            showDropDownMenu(i);
        });
    });

    
    function showDropDownMenu(menu_number) {
        dropdown_menu[menu_number].classList.toggle("display-block");
    }

}
