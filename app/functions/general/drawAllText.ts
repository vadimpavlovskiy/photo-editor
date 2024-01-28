export function drawAllText(
  x: number,
  y: number,
  font: string,
  text: string,
  context: CanvasRenderingContext2D,
) {
  context.font = font;
  context.fillText(text, x, y);
}
