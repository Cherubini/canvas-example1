console.log('ecco');

const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

 for (let i = 0; i < 100; i++) {
    
    const originX = Math.random() * 600;
    const originy = Math.random() * 600;
    const width = Math.random() * 100;
    const height = Math.random() * 100;

    const red = Math.random() * 355;
    const green =Math.random() * 355;
    const blue =Math.random() * 355;


    ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    ctx.fillRect(originX,originy,width,height);
    
    ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
    ctx.lineWidth   = 5;
    ctx.strokeRect(originX,originy,width,height);
 }