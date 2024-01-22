import { RefObject, useEffect } from 'react';
import { IActiveTool } from '../@types/contextTypes/tools';
import { drawEverything } from '../functions/general/drawEverything';
import { draw } from '../functions/painttool/draw';

export function useDrawingHook(
  baseCanvas: RefObject<HTMLCanvasElement>,
  canvasContext: CanvasRenderingContext2D,
  activeTool: IActiveTool | undefined | null,
) {
  const activeDrawingFunction = drawEverything(activeTool);
  useEffect(() => {
    let isDrawing = false; // Boolean value to correct work of mouse listener
    let pointsArray: any = []; // Array of points to draw a smooth lines

    // We start drawing
    const handleMouseDown = (e: MouseEvent) => {
      isDrawing = true;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (isDrawing) {
        if (activeDrawingFunction) {
          console.log('Im acivly drawing');
          draw(e, canvasContext, baseCanvas, pointsArray);
        }
        // Using a draw function to free drawing
      }
    };
    const handleMouseUp = (e: MouseEvent) => {
      baseCanvas.current?.addEventListener('mouseup', (e) => {
        if (isDrawing) {
          if (activeDrawingFunction) {
            draw(e, canvasContext, baseCanvas, pointsArray); // Using a draw function to free drawing
          }
          isDrawing = false;
          pointsArray = []; // Here we need to reset array to be able draw from scretch
        }
      });
    };

    baseCanvas.current?.addEventListener('mousedown', handleMouseDown);
    baseCanvas.current?.addEventListener('mousemove', handleMouseMove);
    baseCanvas.current?.addEventListener('mouseup', handleMouseUp);

    return () => {
      baseCanvas.current?.removeEventListener('mousedown', handleMouseDown);
      baseCanvas.current?.removeEventListener('mousemove', handleMouseMove);
      baseCanvas.current?.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeDrawingFunction, activeTool]);

  return;
}
