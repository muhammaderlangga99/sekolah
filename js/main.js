let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    console.log(scrollPos);
    const nav = document.querySelector('nav');
    if (scrollPos > 100) {
            nav.classList.add('shadow-nav')
    } else if(scrollPos < 100) {
        nav.classList.remove('shadow-nav')
    }
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
