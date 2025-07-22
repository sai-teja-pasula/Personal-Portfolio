window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = '#0a192f';
  } else {
    nav.style.background = '#233554';
  }
});

