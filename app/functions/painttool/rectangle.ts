import { IImage } from '@/app/@types/contextTypes/image';
import { log } from 'console';
import { MouseEvent, RefObject } from 'react';
import { initializeCanvasImage } from '../general/initializeImage';
import { drawAllRect } from '../general/drawAllRect';
import { DrownedObjectType } from '@/app/@types/contextTypes/objects';

export function drawRectangle(
  event: any,
  backgroundContext: CanvasRenderingContext2D,
  canvasContext: CanvasRenderingContext2D | undefined | null,
  canvas: RefObject<HTMLCanvasElement>,
  pointsArray: { x: number; y: number }[],
  objects: DrownedObjectType[] | undefined,
  setObjects: React.Dispatch<React.SetStateAction<DrownedObjectType[]>>,
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
    console.log(setObjects);
    canvasContext.closePath();
    canvasContext.clearRect(
      // We clear canvas all time to create a drag-n-drop effect
      0,
      0,
      canvas.current!.width,
      canvas.current!.height,
    );
    setObjects((prev: any) => [
      ...prev,
      {
        type: 'rectangle',
        startX: startX,
        startY: startY,
        x: x,
        y: y,
        width: width,
        height: height,
        context: backgroundContext,
      },
    ]);
  }
}
