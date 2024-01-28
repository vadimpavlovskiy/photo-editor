export function drawAllEllipse(
  startX: number,
  startY: number,
  x: number,
  y: number,
  context: CanvasRenderingContext2D,
) {
  if (!context) {
    console.error('Canvas context is not available.');
    return;
  }
  const radius = Math.sqrt(Math.pow(startX - x, 2) + Math.pow(startY - y, 2));

  context.beginPath();
  context.arc(startX, startY, radius, 0, 2 * Math.PI);
  context.stroke();
  context.closePath();
}
