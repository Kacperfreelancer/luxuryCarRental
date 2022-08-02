const burgerBtn = document.querySelector('.burger');
const menu = document.querySelectorAll('.menu');
const menuItems = document.querySelectorAll('.menu-item');

const handleMenu = () => {
  menu.forEach(item => {
    item.classList.toggle('active');
  })
  menuItems.forEach(item => {
    item.addEventListener('click', handleMenu)
  })
}


burgerBtn.addEventListener('click', handleMenu);