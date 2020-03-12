function playSound(keycode) {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);
  const key = document.querySelector(`.key[data-key="${keycode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', function(e) {
  playSound(e.keyCode);
});

keys.forEach(key => key.addEventListener('click', function(e) {
  playSound(e.currentTarget.getAttribute('data-key'));
}));