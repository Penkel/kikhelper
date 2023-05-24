const formInput = document.querySelector('.form-control')
const locTitle = document.querySelector('.title');
const locArt = document.querySelector('.art');
const fullScreen = document.querySelector('.fadeMe')
const root = document.documentElement;

let ts = 0;
let to = 3000;

document.addEventListener('mousemove', () => {
    ts = Date.now();
    fullScreen.style.display = 'none';
})
document.addEventListener('keydown', () => {
    ts = Date.now();
    fullScreen.style.display = 'none';
})
// document.addEventListener('keydown', goFullScreen())

setInterval(() => {
    console.log(Date.now() - ts)
    if (Date.now() - ts > to){
    fullScreen.style.display = 'flex';
}})

class Location {
    constructor (key, title, art, music) {
        this.key = key;
        this.title = title;
        this.art = art;
        this.music = music
    } 
}

let locList = [
    new Location('болото', 'Гнилое Болото', 'logo.png','')
]

function changeLoc() {
    let userInput = formInput.value;
    console.log(userInput);

    let currentLoc = locList.find(({key}) => key === userInput)
    console.log(currentLoc);

    locTitle.innerText = currentLoc.title;
    // locArt.src = currentLoc.art;
    root.style.setProperty('--cur-art', "url(" + currentLoc.art + ")")
}
