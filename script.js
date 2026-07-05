const button = document.getElementById('photoBtn');
const flash = document.getElementById('flash');
const photo = document.getElementById('photoOutput');
const camera = document.getElementById('camera');

button.addEventListener('click', () => {
  flash.classList.remove('active');
  photo.classList.remove('reveal');
  camera.classList.remove('shot');

  void flash.offsetWidth;

  flash.classList.add('active');
  camera.classList.add('shot');
  button.disabled = true;

  setTimeout(() => {
    photo.classList.add('reveal');
  }, 520);

  setTimeout(() => {
    button.disabled = false;
  }, 3800);
});
