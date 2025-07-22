window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = '#222';
  } else {
    nav.style.background = '#444';
  }
});
