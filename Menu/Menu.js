
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence.
//   //menu.classList.toggle('menu--open');
//   console.log(menu);
//   TweenLite.to('.menu', 1, { opacity: 0, y: 200 });
// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.body.querySelector('.menu');
// // create a reference to the ".menu-button" class

// Using your menuButton reference, add a click handler that calls toggleMenu

// This is the Stretch version.  Previous commits have the regular solution.
document.body.querySelector('.menu-button')
  .addEventListener('click', (() => {
    const menuShift = TweenLite.to('.menu', 0.5, { left: -50, paused: true });
    let open = false;
    return () => {
      open = !open;
      open ? menuShift.reverse() : menuShift.play(); 
    };
  })());