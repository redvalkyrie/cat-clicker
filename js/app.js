
let clickTimes = 0;
const clickCount = document.querySelector('.clickCount');
const clickCat = document.querySelector('.cat');
const catSound = new Audio('sounds/Kitten Meow-SoundBible.com-1295572573.mp3');

const clickCounter = function() {
	if (clickTimes === 1) {
		clickCount.innerHTML = "You have clicked " + clickTimes + " time!";
	} else {
		clickCount.innerHTML = "You have clicked " + clickTimes + " times!";
	}
}

clickCat.addEventListener('click', function() {
	clickTimes++;
	catSound.cloneNode(true).play();
	clickCounter();
}, false);
