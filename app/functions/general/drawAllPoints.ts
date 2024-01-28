export function drawAllPoints(
  pointsArray: { x: number; y: number }[],
  context: CanvasRenderingContext2D,
) {
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.lineWidth = 5;

  context.beginPath();

  pointsArray.forEach((point: any, index: any) => {
    {
      context.lineTo(point.x, point.y); // Drawing point to point to prevent gaps
    }
  });
  context.stroke();
  context.closePath();
}
