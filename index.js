var topTotal = 0;
var finalTop = 0;
var onesTotal = 0;
var twosTotal = 0;
var threesTotal = 0;
var foursTotal = 0;
var fivesTotal = 0;
var sixesTotal = 0;

var ones = document.querySelector('#onesbox');
var twos = document.querySelector('#twosbox');
var threes = document.querySelector('#threesbox');
var fours = document.querySelector('#foursbox');
var fives = document.querySelector('#fivesbox');
var sixes = document.querySelector('#sixesbox');
var totalTop = document.querySelector('#totaltop');

function oneChange(e) {
  onesTotal = e.target.value;
}

function twoChange(e) {
  twosTotal = e.target.value;
}

function threeChange(e) {
 threesTotal = e.target.value;
}

function fourChange(e) {
 foursTotal = e.target.value;
}

function fiveChange(e) {
  fivesTotal = e.target.value;
}

function sixChange(e) {
  sixesTotal = e.target.value;
}

ones.addEventListener('change', oneChange);
twos.addEventListener('change', twoChange);
threes.addEventListener('change', threeChange);
fours.addEventListener('change', fourChange);
fives.addEventListener('change', fiveChange);
sixes.addEventListener('change', sixChange);

topTotal = onesTotal + twosTotal + threesTotal + foursTotal + fivesTotal + sixesTotal;
console.log(topTotal)
finalTop = topTotal > 62 ? topTotal + 35 : topTotal;
totalTop.textContent =`${finalTop}`;