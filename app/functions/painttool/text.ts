import { DrownedObjectType } from '@/app/@types/contextTypes/objects';
import { RefObject } from 'react';

export function drawText(
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
  if (!canvasContext) return;
  if (event.type === 'mouseup') {
    canvasContext.font = '18px Arial';
    canvasContext.fillText('Hello World', x, y);
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
        type: 'text',
        x: x,
        y: y,
        font: '18px Arial',
        text: 'Hello World',
        context: backgroundContext,
      },
    ]);
  }
}
