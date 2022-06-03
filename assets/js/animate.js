let red;
let green;
let blue;
let rgb;


// Animate lead paragraph with SlideDown
setInterval(() => {
    $('.major').hide().slideDown(2000, 'swing')
}, 5000);



// Function for random colors 
function randomColor() {
    red = (Math.floor(Math.random() * 255))
    green = (Math.floor(Math.random() * 255))
    blue = (Math.floor(Math.random() * 255))
    rgb = 'rgb(' + red + ',' + green + ',' + blue + ')'
    console.log(rgb)
    return rgb
}

