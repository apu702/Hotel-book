//Selectors



//***Menu Bar animation -START*** */
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function(){
    header.classList.toggle('menu-open');
})
//***Menu Bar animation -END****/




//***NavBar color change -START*** */
window.addEventListener('scroll', function(){
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition)
})
//***NavBar color change -END*** */