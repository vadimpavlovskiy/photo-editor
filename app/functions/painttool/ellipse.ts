import { RefObject } from 'react';

export function drawEllipse(
  event: any,
  canvasContext: CanvasRenderingContext2D | undefined | null,
  canvas: RefObject<HTMLCanvasElement>,
  pointsArray: any,
) {
  const rect = canvas.current?.getBoundingClientRect();
  let x = event.clientX - rect!.left; // Relative to canvas user mouse X axis
  let y = event.clientY - rect!.top; // Relative to canvas user mouse Y axis

  pointsArray.push({ x, y });

  const startX = pointsArray[0]?.x;
  const startY = pointsArray[0]?.y;
  const radius = Math.sqrt(Math.pow(startX - x, 2) + Math.pow(startY - y, 2));

  console.log(startX, startY);

  if (!canvasContext) return;

  if (event.type === 'mousemove') {
    canvasContext.clearRect(
      // We clear canvas all time to create a drag-n-drop effect
      0,
      0,
      canvas.current!.width,
      canvas.current!.height,
    );
    canvasContext.beginPath();
    canvasContext.arc(startX, startY, radius, 0, 2 * Math.PI);
    canvasContext.stroke();
  }

  if (event.type === 'mouseup') {
    canvasContext.closePath();
  }
}
