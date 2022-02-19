const canvas = document.getElementById('canvas1'); 
const c  = canvas.getContext('2d'); 
const CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600; 
//see the content of getContext('2d')
console.log(c);

//create an image, I'm using this to store the anitmated sprite sheet
const playerImage = new Image(); 
playerImage.src = '/assets/shadow_dog.png'; 

function animate(){
    //used to clear the canvas 
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    //draw
    fillRect(50,50,100,100); 
    //runs animation loop passed 
    requestAnimationFrame(animate); 

}