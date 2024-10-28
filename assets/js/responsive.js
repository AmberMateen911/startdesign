function toggleMenu(icon) {
    let menu = document.querySelector("#menu");
    let isOpen = menu.style.left === "0px";
  
    // Toggle the menu between open and closed
    menu.style.left = isOpen ? "-250px" : "0px";
  
    // Toggle the hamburger icon animation
    icon.classList.toggle("change");
  }