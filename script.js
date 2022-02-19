const canvas = document.getElementById('canvas1'); 
const c  = canvas.getContext('2d'); 
const CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600; 
//see the content of getContext('2d')
console.log(c);

//create an image, I'm using this to store the anitmated sprite sheet
const playerImage = new Image(); 
playerImage.src = '/assets/shadow_dog.png'; 
const spriteWidth = 520; 
const spriteHeight = 523;
let frameX = 0; 
let frameY = 0; 

function animate(){
    //used to clear the canvas 
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    //draw
    c.fillRect(50,50,100,100);
    //drawImage draws the sprite animation we stored; first argument is the sprite sheet, x and y coordinates, width and height
    //c.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); all the s's represent the cutout portion of the sprite sheet
    c.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);  
    //runs animation loop passed 
    requestAnimationFrame(animate); 
};
//don't forget to call the animate function 
animate(); 