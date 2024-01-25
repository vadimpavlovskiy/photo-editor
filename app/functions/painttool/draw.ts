import { RefObject } from 'react';

export function draw(
  event: any,
  canvasContext: CanvasRenderingContext2D | undefined | null,
  canvas: RefObject<HTMLCanvasElement>,
  pointsArray: any,
) {
  // This function is respinsible for a free drawing
  const rect = canvas.current?.getBoundingClientRect();
  let x = event.clientX - rect!.left; // Relative to canvas user mouse X axis
  let y = event.clientY - rect!.top; // Relative to canvas user mouse Y axis

  pointsArray.push({ x, y });

  if (canvasContext) {
    canvasContext.lineCap = 'round';
    canvasContext.lineJoin = 'round';
    canvasContext.lineWidth = 5;

    canvasContext.beginPath();

    pointsArray.forEach((point: any, index: any) => {
      {
        canvasContext.lineTo(point.x, point.y); // Drawing point to point to prevent gaps
      }
    });
    canvasContext.stroke();
    canvasContext.closePath();
  }
}
