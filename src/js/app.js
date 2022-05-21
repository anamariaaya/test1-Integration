document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
});

function eventListeners(){
    const mobileMenu = document.querySelector('.mobileMenu');
    mobileMenu.addEventListener('click', responsiveNav);

    const switchBtn = document.querySelector('.viewChanger');
    switchBtn.addEventListener('click', changeView);
}

function responsiveNav(){
    const navBar = document.querySelector('.navbar');
    const btnMenu = document.querySelector('.btnMenu');

    navBar.classList.toggle('show');
    btnMenu.classList.toggle('fa-bars');
    btnMenu.classList.toggle('fa-xmark');
}

function changeView(){
    const baseElement = document.querySelector('.baseElement');
    const switchHandler = document.querySelector('.switch-input')
    baseElement.classList.toggle('sitesList');
    switchHandler.toggleAttribute('checked');
    baseElement.classList.toggle('sitesCards');

    document.querySelector('.baseElement').animate([
        // fotogramas clave
        { opacity: 0 },
        { opacity: 1}
      ], {
        // opciones de sincronización
        duration: 1000,
        fill: 'forwards'
      });
}