let playerState = 'idle'; 
const dropdown = document.getElementById('animations'); 
dropdown.addEventListener('change', function(e){
    playerState = e.target.value; 
})

const canvas = document.getElementById('canvas1'); 
const c  = canvas.getContext('2d'); 
const CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600; 
//see the content of getContext('2d')
console.log(c);

//create an image, I'm using this to store the anitmated sprite sheet
const playerImage = new Image(); 
playerImage.src = '/assets/shadow_dog.png'; 
const spriteWidth = 575; 
const spriteHeight = 523;

//gameFrame to control speed 
let gameFrame = 0; 
const staggerFrames = 5; 
const spriteAnimations = []; 
const animationStates = [
    {
        name: 'idle',
        frames: 7, 
    }, 
    {
        name: 'jump', 
        frames: 7,
    },
    {
        name: 'fall', 
        frames: 7,
    },
    {
        name: 'run',
        frames: 9, 
    },
    {
        name: 'dizzy', 
        frames: 11, 
    }, 
    {
        name: 'sit', 
        frames: 5, 
    },
    {
        name: 'roll',
        frames: 7, 
    }, 
    {
        name: 'bite', 
        frames: 7, 
    }, 
    {
        name: 'ko', 
        frames: 12, 
    },
    {
        name: 'getHit',
        frames: 4, 
    }
]; 
animationStates.forEach((state, index) => {
    let frames = {
        loc: [], 
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth; 
        let positionY = index * spriteHeight; 
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames; 
});
console.log(animationStates); 

function animate(){
    //used to clear the canvas 
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    //advanced js
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations['idle'].loc.length;
    let frameX = spriteWidth * position; 
    let frameY = spriteAnimations[playerState].loc[position].y; 
    //drawImage draws the sprite animation we stored; first argument is the sprite sheet, x and y coordinates, width and height
    //c.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); all the s's represent the cutout portion of the sprite sheet
    c.drawImage(playerImage, frameX, frameY, 
    spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);  
    //gives player resting animation; goes horizontally along sprite sheet
    gameFrame++; 
    //runs animation loop passed 
    requestAnimationFrame(animate); 
};
//don't forget to call the animate function 
animate(); 