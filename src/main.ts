const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let last = performance.now();
function update(now: number) {
    const delta = (now-last)/1000;
    last = now;
    console.log(delta);
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 100, 100);




    requestAnimationFrame(update);
}

requestAnimationFrame(update);