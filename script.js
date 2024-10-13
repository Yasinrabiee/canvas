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

ctx.strokeStyle = `red`;
ctx.lineWidth = 1.5;
ctx.lineCap = `round`;
ctx.stroke();
