const gray = document.querySelector('.gray'),
    menu = document.querySelector('.future_none');

function closeMenu() {
    gray.style.display = 'none';
    menu.style.right = -menu.offsetWidth + "px";
}

function openMenu() {
    gray.style.display = 'block';
    menu.style.right = '0';
}

closeMenu();