const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

//setup canvas for drawing
//make a variable called height and width
const { width, height } = canvas;

//math floor to round down
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
//create random x and y


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;


ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


//draw function
function draw({key}){
    console.log(key);
//    start path
    ctx.beginPath();
    ctx.moveTo(x,y);
    //mobe our x and y value dpeing on user input
   switch(key){
       case 'ArrowUp' :
           y = y - MOVE_AMOUNT;
           break;
       case 'ArrowDown' :
           y = y + MOVE_AMOUNT;
           break;
       case 'ArrowLeft' :
           x = x- MOVE_AMOUNT;
           break;
       case 'ArrowRight' :
          x= x + MOVE_AMOUNT;
           break;

       default:
           break;
   }
    ctx.lineTo(x,y);
    ctx.stroke();

}

// key handler
function handleKey(e){
    if (e.key.includes('Arrow'))
    {
        e.preventDefault();
        draw ({ key: e.key})
    }
}
window.addEventListener('keydown', handleKey);
