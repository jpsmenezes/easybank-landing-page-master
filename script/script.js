document.querySelector('.open-menu').addEventListener('click', () => {
    document.body.classList.add('menu-expended');
});
document.querySelector('.close-menu').addEventListener('click', () => {
    document.body.classList.remove('menu-expended');
});