// // How this should go in my mind.
// class Menu {
//   constructor(element) {
//     this.menu = element.querySelector('.menu');
//     console.log(menu);
//     this.menu.addEventListener('click', () => this.toggleMenu());
//   }
//   toggleMenu() {
//     this.menu.classList.toggle('.menu--open');
//   }
// }

// const menu = document.querySelector('.menu');
// const menuButton = document.querySelector('.menu-button');
// const menuToggle = new Menu(menu);

// console.log(menuToggle)




const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  this.classList.toggle('menu--open');
  console.log('hello')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  console.log('I\'m trying to Work');
  menuButton.toggleMenu();
})

