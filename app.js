const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

const point = {
    x: 300,
    y: 300,
}

setInterval(() => {
    const randomX = Math.random() * 2-1;
    const randomY = Math.random() * 2-1;
    ctx.fillStyle='red';
    ctx.fillRect(point.x, point.y, 4, 4);
    point.y +=randomY;
    point.x +=randomX;
}, 1)
