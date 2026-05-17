const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = document.querySelector('.notice');
    if (note) note.style.display = 'block';
    form.reset();
  });
}
