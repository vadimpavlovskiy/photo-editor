export function drawAllRect(
  startX: number,
  startY: number,
  width: number,
  height: number,
  context: CanvasRenderingContext2D,
) {
  if (!context) {
    console.error('Canvas context is not available.');
    return;
  }

  context.beginPath();
  context.strokeRect(startX, startY, width, height);
  context.fillRect(startX, startY, width, height);
  context.closePath();
}
