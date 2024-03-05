// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggle.addEventListener('click', () => {
  // using if
  // if (!links.classList.contains('show-links')) {
  //   links.classList.add('show-links');
  // } else {
  //   links.classList.remove('show-links');
  // }

  links.classList.toggle('show-links');
});
