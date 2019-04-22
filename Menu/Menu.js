// This is the Stretch version.  Previous commits have the regular solution.
const menuHandler = (() => {
  const menuShift = TweenLite.to('.menu', 0.5, { left: -50, paused: true });
  const modalShift = TweenLite.to('.menu-modal', 0.5, { display: 'block', opacity: 1, paused: true });
  let open = false;
  return () => {
    if (open) {
      menuShift.reverse()
      modalShift.reverse();
    } else {
      menuShift.play();
      modalShift.play();
    }
    open = !open;
  };
})();

document.body.querySelector('.menu-button')
  .addEventListener('click', menuHandler);

document.body.querySelector('.menu-modal')
  .addEventListener('click', menuHandler);