// TODO
//
// Fix issue where second hand snaps back
//

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg) translateY(-50%)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg) translateY(50%)`;
  
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg) translateY(50%)`;
  
  console.log(seconds);
  console.log(mins);
  console.log(hours);
  
  if (seconds == 0 || seconds == 59 || seconds == 1) {
    hand.style.removeProperty('transition');
  } else {
    hand.style.transition = 'all 0.05s';
  }
}

setInterval(setDate, 1000);