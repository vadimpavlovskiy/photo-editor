import { RefObject } from 'react';

export function drawText(
  event: any,
  canvasContext: CanvasRenderingContext2D | undefined | null,
  canvas: RefObject<HTMLCanvasElement>,
  pointsArray: any,
) {
  const rect = canvas.current?.getBoundingClientRect();
  let x = event.clientX - rect!.left; // Relative to canvas user mouse X axis
  let y = event.clientY - rect!.top; // Relative to canvas user mouse Y axis
  if (!canvasContext) return;
  if (event.type === 'mouseup') {
    canvasContext.font = '18px Arial';
    canvasContext.fillText('Hello World', x, y);
  }
}
