import { IImage } from '@/app/@types/contextTypes/image';
import { log } from 'console';
import { MouseEvent, RefObject } from 'react';
import { initializeCanvasImage } from '../general/initializeImage';

export function drawRectangle(
  event: any,
  canvasContext: CanvasRenderingContext2D | undefined | null,
  canvas: RefObject<HTMLCanvasElement>,
  pointsArray: any,
) {
  // This functinon is drawing rectangle
  const rect = canvas.current?.getBoundingClientRect();
  let x = event.clientX - rect!.left; // Relative to canvas user mouse X axis
  let y = event.clientY - rect!.top; // Relative to canvas user mouse Y axis

  pointsArray.push({ x, y });

  const startX = pointsArray[0]?.x || 0;
  const startY = pointsArray[0]?.y || 0;

  const width = x - startX;
  const height = y - startY;

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
    canvasContext.strokeRect(startX, startY, width, height);
    canvasContext.fillRect(startX, startY, width, height);
  }
  if (event.type === 'mouseup') {
    canvasContext.closePath();
  }
}
