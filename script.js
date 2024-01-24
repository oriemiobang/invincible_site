const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;
});
function togglePages(direction) {
  var firstPage = document.querySelector('.firstpage');
  var secondPage = document.querySelector('.secondpage');
  var page = document.querySelector('.page1')

  if (direction === 'forward') {
    secondPage.style.display = 'none';
    firstPage.style.display = 'block';
    page.style.transition = "background 0.5s";
    page.style.background = "linear-gradient(rgba(0, 0, 0, 0.646), rgba(0, 0, 0, 0.5)), url('assets/b1.jpg')";
    page.style.backgroundSize = "cover";
    page.style.justifyContent = "center";
} else if (direction === 'backward') {
    secondPage.style.display = 'block';
    firstPage.style.display = 'none';
    page.style.transition = "background 0.5s";
    page.style.background = "linear-gradient(rgba(0, 0, 0, 0.646), rgba(0, 0, 0, 0.5)), url('assets/b4.jpg')";
    page.style.backgroundSize = "cover";
    page.style.justifyContent = "";

}
}