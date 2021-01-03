
const ball = document.querySelector('.ball').style;
console.log(ball.marginLeft);
const INCREMENT = 50;

document.addEventListener('keydown', (e) =>{
    const marginLeft = ball.marginLeft;
    const marginTop = ball.marginTop;
    let updatedleftMargin = 'undefined';
    let updatedtopMargin = 'undefined';
    switch (e.keyCode) {
        case 37:
            console.log('left');
            updatedleftMargin = +marginLeft.substring(0, marginLeft.length - 2) - INCREMENT;
            break;
        case 38:
            console.log('up');
            updatedtopMargin = +marginTop.substring(0,marginTop.length-2) - INCREMENT;
            break;
        case 39:
            console.log('right');
            updatedleftMargin = +marginLeft.substring(0, marginLeft.length - 2) + INCREMENT;
            break;
        case 40:
            console.log('down');
            updatedtopMargin = +marginTop.substring(0,marginTop.length-2) + INCREMENT;
            break;
    }
    if(updatedleftMargin < window.innerWidth && 0 <= updatedleftMargin) {
        ball.marginLeft = `${updatedleftMargin}px`;
    }
    if(updatedtopMargin < window.innerHeight && 0 <= updatedtopMargin) {
        ball.marginTop = `${updatedtopMargin}px`;
    }
});