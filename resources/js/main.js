const sprite1 = document.querySelector('.sprite-1');
const sprite2 = document.querySelector('.sprite-2');
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');
const result = document.querySelector('.result');

const trigger = 'mouseup'

let sprite1Shake;

const moveRandomly = (element, shift) => {
    
    let x = element.offsetLeft;
    let y = element.offsetTop;
    console.log('boom')
    console.log(x, y);
    boxAnimation = setInterval(() => {
        element.style.left = `${x + (Math.random() * shift - shift)}px`;
        element.style.top = `${y + (Math.random() * shift - shift)}px`;
    }, 5);

}

const yesButtonPressed = () => {
    sprite2.style.display = 'block'
    result.style.color = 'rgb(0, 91, 9)';
    result.innerHTML = "Nah gitu dong anak baek dengerin ayahnya..."
    yesButton.removeEventListener(trigger, yesButtonPressed)
    noButton.removeEventListener(trigger, noButtonPressed)
}

const noButtonPressed = () => {
    sprite1.style.display = 'block';
    moveRandomly(sprite1, 10);
    result.style.color = 'rgb(120, 0, 0)';
    result.innerHTML = "TUH KAN KESETRUM, BADUNG SIH!!"
    yesButton.removeEventListener(trigger, yesButtonPressed)
    noButton.removeEventListener(trigger, noButtonPressed)
}

yesButton.addEventListener(trigger, yesButtonPressed);
noButton.addEventListener(trigger, noButtonPressed);
