const burgerBtn = document.querySelector('.burger');
const menu = document.querySelectorAll('.menu');
const menuItems = document.querySelectorAll('.menu-item');


const handleBurgerColor = () => {
  const orientation = window.screen.orientation;
  const burgerElements = [...burgerBtn.children];

  if (orientation.type === "landscape-primary") {
    burgerElements.forEach(el => {
      el.style.backgroundColor = '#fff'
    })
  } else if (orientation.type !== "landscape-primary") {
    burgerElements.forEach(el => {
      el.style.backgroundColor = '#000'
    })
  }
}

const handleMenu = () => {

  menu.forEach(item => {
    item.classList.toggle('active');
  })
  menuItems.forEach(item => {
    item.addEventListener('click', handleMenu)
  })
}
handleBurgerColor()
window.addEventListener('orientationchange', handleBurgerColor)
burgerBtn.addEventListener('click', handleMenu);