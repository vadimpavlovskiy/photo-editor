import { RefObject } from 'react';
import { drawAllEllipse } from '../general/drawAllEllipse';
import { DrownedObjectType } from '@/app/@types/contextTypes/objects';

export function drawEllipse(
  event: any,
  backgroundContext: CanvasRenderingContext2D,
  canvasContext: CanvasRenderingContext2D | undefined | null,
  canvas: RefObject<HTMLCanvasElement>,
  pointsArray: { x: number; y: number }[],
  objects: DrownedObjectType[] | undefined,
  setObjects: React.Dispatch<React.SetStateAction<DrownedObjectType[]>>,
) {
  const rect = canvas.current?.getBoundingClientRect();
  let x = event.clientX - rect!.left; // Relative to canvas user mouse X axis
  let y = event.clientY - rect!.top; // Relative to canvas user mouse Y axis

  pointsArray.push({ x, y });

  const startX = pointsArray[0]?.x;
  const startY = pointsArray[0]?.y;
  const radius = Math.sqrt(Math.pow(startX - x, 2) + Math.pow(startY - y, 2));

  if (!canvasContext) return;

  if (event.type === 'mousemove') {
    canvasContext.clearRect(
      // Clear only the drawing canvas
      0,
      0,
      canvas.current!.width,
      canvas.current!.height,
    );

    // Draw the ongoing ellipse
    canvasContext.beginPath();
    canvasContext.arc(startX, startY, radius, 0, 2 * Math.PI);
    canvasContext.stroke();
  }

  if (event.type === 'mouseup') {
    canvasContext.closePath();

    // Clear only the drawing canvas
    canvasContext.clearRect(
      0,
      0,
      canvas.current!.width,
      canvas.current!.height,
    );

    // Add the ellipse to the objects array
    setObjects((prev: any) => [
      ...prev,
      {
        type: 'ellipse',
        startX: startX,
        startY: startY,
        x: x,
        y: y,
        context: backgroundContext,
      },
    ]);
  }
}
