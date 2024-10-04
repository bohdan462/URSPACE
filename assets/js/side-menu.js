document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var sideMenu = document.querySelector('.side-menu');
    var sideMenuClose = document.querySelector('.side-menu-close');

    if (menuToggle && sideMenu && sideMenuClose) {
        menuToggle.addEventListener('click', function() {
            sideMenu.classList.add('active');
        });

        sideMenuClose.addEventListener('click', function() {
            sideMenu.classList.remove('active');
        });
    }
});