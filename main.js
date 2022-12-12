
window.onload = function() {
    
    const menu_btn = document.querySelector(".burger");
    const mobile_menu = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".overlay");

    menu_btn.addEventListener("click", function() {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
        overlay.classList.toggle("is-active");
        
    });

}