var menu = document.getElementById('menu');
var drawer = document.getElementById('drawer-icon');

drawer.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
