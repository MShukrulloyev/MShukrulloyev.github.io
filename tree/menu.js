const menu = document.getElementById('menu');

function openMenu() {
    menu.style.right = 0;
}

function closeMenu() {
    menu.style.right = -menu.offsetWidth + 'px';
}

closeMenu()