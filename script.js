const canvas = document.querySelector(`#canvas`);
const ctx = canvas.getContext(`2d`);

ctx.moveTo(150, 50);
ctx.lineTo(100, 75);
ctx.lineTo(200, 75);
ctx.lineTo(150, 50);
ctx.moveTo(100, 75);
ctx.lineTo(100, 200);
ctx.moveTo(200, 75);
ctx.lineTo(200, 200);
ctx.lineTo(200, 260);

ctx.strokeStyle = `lightblue`;
ctx.lineWidth = 3;
ctx.lineCap = `round`;
ctx.stroke();
