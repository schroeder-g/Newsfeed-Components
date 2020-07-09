/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
Write a component called 'menuMaker' to create a menu
*/
function menuMaker (navArray){
  const navBar = document.createElement("div")
  navBar.classList.add("menu")
  const navList = document.createElement("ul")
  const header = document.querySelector(".header")

  //iterate over the array creating a list item <li> element for each item in the array. 
  navArray.forEach((link) => {
    const htmlLink = document.createElement("li")
    htmlLink.innerText = link
    htmlLink.id = link.replace(" ", "-").replace(/[',!?~@#$%^&*]/, "").toLowerCase() 
    htmlLink.className = "navLink"
    navList.appendChild(htmlLink)
  })
  
  navBar.appendChild(navList)

  // select the menu button (the element with a class of 'menu-button') currently on the DOM.
  const menuBtn = document.querySelector(".menu-button")
  // add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuBtn.addEventListener('click', () => {
    navBar.classList.toggle("menu--open")
  } )

  header.appendChild(navBar)

}

menuMaker(menuItems)