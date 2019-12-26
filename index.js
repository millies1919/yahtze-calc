var topTotal = 0;
var finalTop = 0;
var previouslyEntered = 0;

var tops = Array.from(document.querySelectorAll('.topfield'));
var totalTop = document.querySelector('#totaltop');

function onChange(e) {
    if(typeof(parseInt(e.target.value)) !== NaN) {
        if(parseInt(e.target.value) !== previouslyEntered) {
        topTotal = (topTotal - previouslyEntered) + parseInt(e.target.value)
        previouslyEntered = parseInt(e.target.value)
        finalTop = topTotal > 62 ? topTotal + 35 : topTotal;
        totalTop.textContent =`${finalTop}`;
        } else {
        topTotal = parseInt(e.target.value) + topTotal;
        previouslyEntered = parseInt(e.target.value);
        finalTop = topTotal > 62 ? topTotal + 35 : topTotal;
        totalTop.textContent =`${finalTop}`;
        }
    } else {
        alert("Please enter a number")//ask fel on this one
    }
}

function onClick(e) {
    previouslyEntered = e.target.value;
}

tops.map(item => {
    item.addEventListener('change', onChange)
    item.addEventListener('click', onClick)
})

