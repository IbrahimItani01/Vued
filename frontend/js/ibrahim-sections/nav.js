const burgerLogo = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav-menu");

burgerLogo.addEventListener("click",()=>{
    mobileNav.classList.toggle("hidden");
})