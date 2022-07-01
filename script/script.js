document.querySelector('.open-menu').addEventListener('click', () => {
    document.body.classList.add('menu-expended');
});
document.querySelector('.close-menu').addEventListener('click', () => {
    document.body.classList.remove('menu-expended');
});

document.querySelectorAll('.menu ul li').forEach(item => item.addEventListener('click', function(){
    document.body.classList.remove('menu-expended');
}));


